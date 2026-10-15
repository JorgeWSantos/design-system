import { useEffect, useRef, useState } from 'react';
import { DownloadIcon, ShareIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

import { useDeviceType } from 'hooks/useDeviceType';
import { ShareOptions } from '@components/ShareOptions';
import { Spinner } from '@components/Spinner';
import { Toast } from '@components/Toast';
import { ActionButton, ActionsWrapper, ShareWrapper } from './styles';
import { VideoActionsProps } from './types';

export type { VideoActionsProps };

const VIDEO_FILE_EXTENSIONS = /\.(mp4|webm|ogg|mov|m4v)$/i;

/** Indica se a URL aponta para um arquivo de vídeo (.mp4, .webm, .ogg, .mov, .m4v). */
export const isVideoFile = (url: string) => {
  try {
    return VIDEO_FILE_EXTENSIONS.test(new URL(url).pathname);
  } catch {
    return VIDEO_FILE_EXTENSIONS.test(url);
  }
};

const getFileName = (url: string) => {
  try {
    return new URL(url).pathname.split('/').pop() || 'video.mp4';
  } catch {
    return 'video.mp4';
  }
};

type AppWebView = { postMessage: (message: string) => void };

/** Ponte do WebView do app ABQM (react-native-webview); só existe quando o site abre dentro do app. */
const getAppWebView = () =>
  (window as Window & { ReactNativeWebView?: AppWebView }).ReactNativeWebView;

/**
 * O app ABQM anuncia em `window.ABQM_APP_CAPS` o que sabe fazer. Com `downloadUrl`, ele mesmo
 * baixa a URL direto para o disco; sem o flag (app 8.25.0), o vídeo vai inteiro em base64.
 */
const appCanDownloadUrl = () =>
  Boolean(
    (window as Window & { ABQM_APP_CAPS?: { downloadUrl?: boolean } }).ABQM_APP_CAPS
      ?.downloadUrl
  );

const VIDEO_MIME_TYPES: Record<string, string> = {
  mp4: 'video/mp4',
  webm: 'video/webm',
  ogg: 'video/ogg',
  mov: 'video/quicktime',
  m4v: 'video/x-m4v',
};

const getMimeType = (fileName: string) =>
  VIDEO_MIME_TYPES[fileName.split('.').pop()?.toLowerCase() ?? ''] ?? 'video/mp4';

/** Evento com que o app ABQM devolve o andamento de um DOWNLOAD_URL. */
const APP_DOWNLOAD_EVENT = 'abqm-app-download';

/** Sem notícia do app por esse tempo, o botão é liberado em vez de ficar em "Baixando...". */
const APP_DOWNLOAD_TIMEOUT = 30000;

type AppDownloadEventDetail = {
  id: string;
  status: 'progress' | 'done' | 'error';
  percent?: number | null;
};

/**
 * Pede ao app ABQM para baixar a URL (DOWNLOAD_URL). O app grava direto no disco, sem o
 * vídeo passar pela memória do WebView, abre o salvar/compartilhar nativo e devolve o
 * progresso pelo evento `abqm-app-download`. Abortar o `signal` cancela o download no app.
 */
const downloadWithApp = (
  appWebView: AppWebView,
  url: string,
  fileName: string,
  signal: AbortSignal,
  onProgress: (percent: number) => void
) =>
  new Promise<void>((resolve, reject) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    let timeoutId: number | undefined;

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener(APP_DOWNLOAD_EVENT, handleEvent);
      signal.removeEventListener('abort', handleAbort);
    };

    const restartTimeout = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        cleanup();
        reject(new Error('O app não respondeu ao download'));
      }, APP_DOWNLOAD_TIMEOUT);
    };

    function handleEvent(event: Event) {
      const detail = (event as CustomEvent<AppDownloadEventDetail>).detail;
      if (detail?.id !== id) return;

      if (detail.status === 'progress') {
        restartTimeout();
        if (typeof detail.percent === 'number') onProgress(detail.percent);
        return;
      }

      cleanup();
      if (detail.status === 'done') resolve();
      else reject(new Error('O app não conseguiu baixar o vídeo'));
    }

    function handleAbort() {
      cleanup();
      appWebView.postMessage(JSON.stringify({ type: 'DOWNLOAD_URL_CANCEL', id }));
      reject(new Error('Download cancelado'));
    }

    window.addEventListener(APP_DOWNLOAD_EVENT, handleEvent);
    signal.addEventListener('abort', handleAbort);
    restartTimeout();

    appWebView.postMessage(
      JSON.stringify({
        type: 'DOWNLOAD_URL',
        id,
        url,
        filename: fileName,
        mimeType: getMimeType(fileName),
      })
    );
  });

/** iPhone e iPad (o iPadOS se identifica como Mac, mas tem tela touch). */
const isIOS = () =>
  /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
  (/Macintosh/.test(window.navigator.userAgent) && window.navigator.maxTouchPoints > 1);

/**
 * WebView de outro app (Instagram, Facebook...), que ignora o download de URL blob:.
 * No Android ela vem marcada com "wv"; no iOS falta o "Safari/" que todo navegador envia.
 */
const isOtherAppWebView = () =>
  isIOS()
    ? !/Safari\//.test(window.navigator.userAgent)
    : /Android.*;\s?wv\)/.test(window.navigator.userAgent);

/**
 * Baixa o arquivo inteiro, informando o progresso (0 a 99) quando o servidor envia o Content-Length.
 * Os vídeos das passadas passam de 50 MB, então sem o progresso o botão parece travado.
 */
const fetchBlob = async (
  url: string,
  signal: AbortSignal,
  onProgress: (percent: number) => void
) => {
  const response = await window.fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const total = Number(response.headers.get('Content-Length'));
  if (!response.body || !total) return response.blob();

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    received += value.length;
    onProgress(Math.min(99, Math.floor((received / total) * 100)));
  }

  return new Blob(chunks, { type: response.headers.get('Content-Type') || 'video/mp4' });
};

const blobToBase64 = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    // remove o prefixo "data:<tipo>;base64,"
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

/**
 * Salva pelo download do navegador. O atributo `download` só é respeitado em URL de mesma origem
 * ou blob; por isso o arquivo é baixado inteiro antes (o navegador não exige gesto para este clique).
 */
const saveWithLink = (blob: Blob, fileName: string) => {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
};

/**
 * VideoActions
 *
 * Botões de Baixar e Compartilhar para um vídeo.
 * - Compartilhar: abre o popover do ShareOptions (WhatsApp), acima do botão no desktop e abaixo no mobile.
 * - Baixar: arquivos de vídeo são baixados (o servidor precisa liberar CORS), mostrando o progresso.
 *   - App ABQM (iOS e Android): o app baixa a URL e abre o salvar/compartilhar nativo; o
 *     progresso volta para o botão. No app 8.25.0, o arquivo é baixado aqui e vai em base64.
 *   - Navegadores (iOS, Android e desktop): download do navegador, salvo na pasta de downloads.
 *   - WebView de outros apps (Instagram, Facebook...): avisa para abrir a página no navegador.
 *   Outras URLs (player, YouTube) não podem ser baixadas pelo navegador e abrem em uma nova aba.
 *
 * @param videoUrl URL do vídeo.
 * @param showDownload Mostra o botão Baixar. Padrão: true.
 * @param showShare Mostra o botão Compartilhar. Padrão: true.
 */
export const VideoActions = ({
  videoUrl,
  showDownload = true,
  showShare = true,
}: VideoActionsProps) => {
  const { isTabletOrMobile } = useDeviceType();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  const downloadControllerRef = useRef<AbortController | null>(null);

  // cancela o download ao fechar o modal, para o arquivo não ser salvo depois que o usuário saiu
  useEffect(() => () => downloadControllerRef.current?.abort(), []);

  // fecha o popover ao tocar fora dele
  useEffect(() => {
    if (!isShareOpen) return;

    const handleOutsideClick = (event: Event) => {
      if (!shareRef.current?.contains(event.target as Node)) setIsShareOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isShareOpen]);

  const openInNewTab = () => window.open(videoUrl, '_blank', 'noopener,noreferrer');

  const handleDownload = async () => {
    if (!isVideoFile(videoUrl)) {
      openInNewTab();
      return;
    }

    if (isDownloading) return;

    const fileName = getFileName(videoUrl);
    const appWebView = getAppWebView();

    // evita baixar o vídeo à toa em um WebView que não tem como salvar o arquivo
    if (!appWebView && isOtherAppWebView()) {
      Toast.show({
        message:
          'Este app não permite baixar o vídeo. Abra a página no navegador para baixar.',
        type: 'warning',
        timeout: 5000,
      });
      return;
    }

    const controller = new AbortController();
    downloadControllerRef.current = controller;

    setIsDownloading(true);
    setDownloadProgress(null);

    try {
      if (appWebView && appCanDownloadUrl()) {
        await downloadWithApp(
          appWebView,
          videoUrl,
          fileName,
          controller.signal,
          setDownloadProgress
        );
        return;
      }

      const blob = await fetchBlob(videoUrl, controller.signal, setDownloadProgress);

      if (appWebView) {
        // app ABQM 8.25.0, que não baixa pela URL: o WebView (iOS e Android) ignora o download
        // de URL blob:, então o arquivo vai em base64 e o app salva e abre o compartilhamento
        const base64 = await blobToBase64(blob);
        if (controller.signal.aborted) return;

        appWebView.postMessage(
          JSON.stringify({
            type: 'DOWNLOAD_FILE',
            filename: fileName,
            mimeType: blob.type || 'video/mp4',
            base64,
          })
        );
        return;
      }

      saveWithLink(blob, fileName);

      // Toast.show({
      //   // no iPhone o download não aparece na galeria, e sim no app Arquivos
      //   message: isIOS()
      //     ? 'Vídeo baixado! Ele fica no app Arquivos, em Downloads.'
      //     : 'Vídeo baixado! Ele fica na pasta Downloads.',
      //   type: 'success',
      //   timeout: 4000,
      // });
    } catch {
      // download cancelado ao fechar o modal
      if (controller.signal.aborted) return;

      Toast.show({
        message: 'Não foi possível baixar o vídeo. Abrindo o link...',
        type: 'error',
        timeout: 3000,
      });

      // ex.: CORS bloqueando o fetch — deixa o navegador tratar o arquivo
      openInNewTab();
    } finally {
      if (downloadControllerRef.current === controller)
        downloadControllerRef.current = null;
      setIsDownloading(false);
      setDownloadProgress(null);
    }
  };

  if (!showDownload && !showShare) return null;

  return (
    <ActionsWrapper>
      {showDownload && (
        <ActionButton
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          aria-busy={isDownloading}
          aria-label="Baixar vídeo"
        >
          {isDownloading ? (
            <Spinner stroke={colors.white85} aria-hidden="true" />
          ) : (
            <DownloadIcon fill={colors.white85} aria-hidden="true" />
          )}
          {isDownloading
            ? `Baixando${downloadProgress !== null ? ` ${downloadProgress}%` : '...'}`
            : 'Baixar'}
        </ActionButton>
      )}

      {showShare && (
        <ShareWrapper ref={shareRef}>
          <ActionButton
            type="button"
            onClick={() => setIsShareOpen((prev) => !prev)}
            aria-expanded={isShareOpen}
            aria-label="Compartilhar vídeo"
          >
            <ShareIcon fill={colors.white85} aria-hidden="true" />
            Compartilhar
          </ActionButton>

          {isShareOpen && (
            <div onClick={() => setIsShareOpen(false)}>
              <ShareOptions
                url={videoUrl}
                anchor={isTabletOrMobile ? 'button' : 'button-top'}
              />
            </div>
          )}
        </ShareWrapper>
      )}
    </ActionsWrapper>
  );
};

VideoActions.displayName = 'VideoActions';

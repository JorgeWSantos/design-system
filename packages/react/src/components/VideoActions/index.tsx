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

/**
 * VideoActions
 *
 * Botões de Baixar e Compartilhar para um vídeo.
 * - Compartilhar: abre o popover do ShareOptions (WhatsApp), acima do botão no desktop e abaixo no mobile.
 * - Baixar: arquivos de vídeo são baixados (o servidor precisa liberar CORS). Outras URLs
 *   (player, YouTube) não podem ser baixadas pelo navegador e abrem em uma nova aba.
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
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

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

    setIsDownloading(true);

    try {
      const response = await window.fetch(videoUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      // o atributo `download` só é respeitado em URL de mesma origem ou blob; por isso
      // o arquivo é baixado inteiro antes (o navegador não exige gesto para o clique abaixo)
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    } catch {
      Toast.show({
        message: 'Não foi possível baixar o vídeo. Abrindo o link...',
        type: 'error',
        timeout: 3000,
      });

      // ex.: CORS bloqueando o fetch — deixa o navegador tratar o arquivo
      openInNewTab();
    } finally {
      setIsDownloading(false);
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
          Baixar
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

import { colors } from '@abqm-ds/tokens';

import { Modal } from '@components/Modal';
import { DisableBackdropFilterBehind, VideoWrapper } from './styles';
import { ModalVideoProps } from './types';

export type { ModalVideoProps };

const VIDEO_FILE_EXTENSIONS = /\.(mp4|webm|ogg|mov|m4v)$/i;

const isVideoFile = (url: string) => {
  try {
    return VIDEO_FILE_EXTENSIONS.test(new URL(url).pathname);
  } catch {
    return VIDEO_FILE_EXTENSIONS.test(url);
  }
};

/**
 * Converte links do YouTube (watch, youtu.be, live, shorts) para o formato embed,
 * mantendo o tempo inicial (`t`). Outras URLs são retornadas sem alteração.
 */
const toEmbedUrl = (url: string, autoPlay: boolean) => {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^(www\.|m\.)/, '');

    let videoId: string | null = null;

    if (host === 'youtu.be') {
      videoId = parsedUrl.pathname.slice(1);
    } else if (host === 'youtube.com') {
      const [, path, id] = parsedUrl.pathname.split('/');

      if (path === 'watch') videoId = parsedUrl.searchParams.get('v');
      if (path === 'live' || path === 'shorts') videoId = id;
    }

    const embedUrl = videoId
      ? new URL(`https://www.youtube.com/embed/${videoId}`)
      : parsedUrl;

    const start = parsedUrl.searchParams.get('t');
    if (videoId && start) embedUrl.searchParams.set('start', start.replace(/s$/, ''));

    if (autoPlay) embedUrl.searchParams.set('autoplay', '1');

    return embedUrl.toString();
  } catch {
    return url;
  }
};

/**
 * ModalVideo
 *
 * Exibe um vídeo sobre fundo escuro, usando o Modal no modo 'full'.
 * Arquivos de vídeo (.mp4, .webm, .ogg, .mov, .m4v) tocam no player nativo do navegador;
 * qualquer outra URL (ex: YouTube) é exibida em um iframe.
 *
 * @param isOpen Controla a visibilidade do modal.
 * @param onClose Função chamada ao fechar o modal (clique fora ou no botão de fechar).
 * @param videoUrl URL do vídeo. Links do YouTube (watch, youtu.be, live, shorts) são convertidos para embed.
 * @param title Texto acessível do vídeo. Padrão: 'Vídeo'.
 * @param autoPlay Começa a tocar ao abrir. Padrão: true. O navegador pode bloquear o autoplay com som.
 */
export const ModalVideo = ({
  isOpen,
  onClose,
  videoUrl,
  title = 'Vídeo',
  autoPlay = true,
}: ModalVideoProps) => (
  <>
    {isOpen && <DisableBackdropFilterBehind />}

    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      data-modal-video
      style={{ background: colors.black85 }}
    >
      <VideoWrapper>
        {isVideoFile(videoUrl) ? (
          <video src={videoUrl} title={title} controls autoPlay={autoPlay} playsInline />
        ) : (
          <iframe
            src={toEmbedUrl(videoUrl, autoPlay)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </VideoWrapper>
    </Modal>
  </>
);

ModalVideo.displayName = 'ModalVideo';

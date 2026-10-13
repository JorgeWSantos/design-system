export interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  autoPlay?: boolean;
  /** Mostra o botão Baixar abaixo do vídeo. Padrão: false. */
  showDownload?: boolean;
  /** Mostra o botão Compartilhar abaixo do vídeo. Padrão: false. */
  showShare?: boolean;
}

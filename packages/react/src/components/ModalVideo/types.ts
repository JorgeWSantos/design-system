export interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  autoPlay?: boolean;
}

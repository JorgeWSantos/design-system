import { MouseEvent, ReactNode } from 'react';
import { CloseButton, ModalContent, ModalOverlay, StyledXIcon } from './styles';

import ReactDOM from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <StyledXIcon fill="#000" width={14} height={14} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

Modal.displayName = 'Modal';

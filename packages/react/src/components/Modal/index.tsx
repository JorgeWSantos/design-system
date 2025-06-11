import React, { ComponentProps, MouseEvent, ReactNode } from 'react';
import {
  CloseButton,
  DivCloseButton,
  ModalContent,
  ModalOverlay,
  StyledXIcon,
} from './styles';

import ReactDOM from 'react-dom';
import { PropModalPositions, PropModalSizes } from './types';

export interface ModalProps extends ComponentProps<'div'> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: PropModalPositions;
  styleContent?: React.CSSProperties;
  size?: PropModalSizes;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  position,
  styleContent,
  size = 'normal',
  ...rest
}: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay onClick={handleOverlayClick} $position={position} {...rest}>
      <ModalContent $position={position} style={styleContent} $size={size}>
        <DivCloseButton $size={size}>
          <CloseButton onClick={onClose}>
            <StyledXIcon width={14} height={14} $size={size} />
          </CloseButton>
        </DivCloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

Modal.displayName = 'Modal';

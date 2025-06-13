import React, { ComponentProps, MouseEvent, ReactNode } from 'react';
import {
  CloseButton,
  DivChildren,
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

/**
 * Modal
 *
 * Exibe uma janela modal sobreposta à interface, centralizada ou alinhada à esquerda/direita.
 *
 * @param isOpen Controla a visibilidade do modal.
 * @param onClose Função chamada ao fechar o modal (ex: clique fora ou no botão de fechar).
 * @param children Conteúdo a ser exibido dentro do modal.
 * @param position Posição do modal na tela: 'left', 'right' ou 'center'. Padrão: 'center'.
 * @param styleContent Estilos adicionais para o conteúdo do modal.
 * @param size 'full' preenche toda a tela, deve ser usado para imagens ou documentos. 'normal' é o modal padrão das aplicações.
 *
 * @example
 * <Modal isOpen={open} onClose={handleClose} position="center">
 *   <div>Conteúdo do modal</div>
 * </Modal>
 */
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
    <ModalOverlay
      onClick={handleOverlayClick}
      $position={position}
      $size={size}
      {...rest}
    >
      <ModalContent $position={position} style={styleContent} $size={size}>
        <DivCloseButton $size={size}>
          <CloseButton onClick={onClose}>
            <StyledXIcon width={14} height={14} $size={size} />
          </CloseButton>
        </DivCloseButton>
        <DivChildren>{children}</DivChildren>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

Modal.displayName = 'Modal';

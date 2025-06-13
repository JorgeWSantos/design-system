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
 * @param maxHeight Define o tamanho máximo do conteúdo do modal (ex: '90vh'). Por padrão, o modal se ajusta ao conteúdo até esse limite.
 *
 * @example
 * <Modal isOpen={open} onClose={handleClose} position="center" maxHeight="90vh">
 *   <div>Conteúdo do modal</div>
 * </Modal>
 *
 * Comportamento:
 * - O modal ajusta sua altura automaticamente ao conteúdo, até o limite de maxHeight.
 * - Se o conteúdo for maior que maxHeight, será exibido um scroll interno.
 * - O modal pode ser fechado clicando fora dele ou no botão de fechar.
 */
export const Modal = ({
  isOpen,
  onClose,
  children,
  position,
  styleContent,
  size = 'normal',
  maxHeight = '90vh',
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
      <ModalContent
        $maxHeight={maxHeight}
        $position={position}
        style={styleContent}
        $size={size}
      >
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

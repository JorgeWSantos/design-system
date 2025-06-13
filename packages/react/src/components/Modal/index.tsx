import React, {
  ComponentProps,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  CloseButton,
  DivChildren,
  DivCloseButton,
  ModalContent,
  ModalOverlay,
  StyledXIcon,
  AnimatedArrowRight, // add import
} from './styles';

import ReactDOM from 'react-dom';
import {
  PropModalHorizontalPositions,
  PropModalSizes,
  PropModalVerticalPositions,
} from './types';

export interface ModalProps extends ComponentProps<'div'> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  positionHorizontal?: PropModalHorizontalPositions;
  positionVertical?: PropModalVerticalPositions;
  styleContent?: React.CSSProperties;
  size?: PropModalSizes;
  maxHeight?: string;
}

/**
 * Modal
 *
 * Exibe uma janela modal sobreposta à interface, centralizada ou alinhada à esquerda/direita.
 *
 * @param isOpen Controla a visibilidade do modal.
 * @param onClose Função chamada ao fechar o modal (ex: clique fora ou no botão de fechar).
 * @param children Conteúdo a ser exibido dentro do modal.
 * @param positionHorizontal Posição do modal na tela: 'left', 'right' ou 'center'. Padrão: 'center'.
 * @param styleContent Estilos adicionais para o conteúdo do modal.
 * @param size 'full' preenche toda a tela, deve ser usado para imagens ou documentos. 'normal' é o modal padrão das aplicações.
 * @param maxHeight Define o tamanho máximo do conteúdo do modal (ex: '90vh'). Por padrão, o modal se ajusta ao conteúdo até esse limite.
 *
 * @example
 * <Modal isOpen={open} onClose={handleClose} positionHorizontal="center" maxHeight="90vh">
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
  positionHorizontal = 'center',
  positionVertical = 'center',
  styleContent,
  size = 'normal',
  maxHeight = '90vh',
  ...rest
}: ModalProps) => {
  // Mostrar seta animada por 6 segundos (3x 2s)
  const [showArrow, setShowArrow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Detecta se o conteúdo tem scroll
  const checkScroll = () => {
    const el = contentRef.current;
    if (!el) return false;
    return el.scrollHeight > el.clientHeight;
  };

  useEffect(() => {
    if (isOpen) {
      // Só mostra a seta se houver scroll
      if (checkScroll()) {
        setShowArrow(true);
        const timeout = setTimeout(() => setShowArrow(false), 4500);
        return () => window.clearTimeout(timeout);
      } else {
        setShowArrow(false);
      }
    } else {
      setShowArrow(false);
    }
  }, [isOpen, children, maxHeight, size, positionHorizontal, styleContent]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay
      onClick={handleOverlayClick}
      $positionHorizontal={positionHorizontal}
      $positionVertical={positionVertical}
      $size={size}
      {...rest}
    >
      <ModalContent
        $maxHeight={maxHeight}
        $positionHorizontal={positionHorizontal}
        $positionVertical={positionVertical}
        style={styleContent}
        $size={size}
      >
        <DivCloseButton $size={size}>
          <CloseButton onClick={onClose}>
            <StyledXIcon width={14} height={14} $size={size} />
          </CloseButton>
        </DivCloseButton>
        <DivChildren ref={contentRef}>
          {children}
          {showArrow && <AnimatedArrowRight />}
        </DivChildren>
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

Modal.displayName = 'Modal';

import { MouseEvent, useEffect, useRef, useState } from 'react';

import {
  CloseButton,
  DivChildren,
  ModalContent,
  ModalOverlay,
  StyledXIcon,
  AnimatedArrowRight,
  DivTopModal,
  HeaderFilter,
  DivButtonCleanFilter,
  DivButton,
  WrapperHeading, // add import
} from './styles';

import ReactDOM from 'react-dom';
import { Heading } from '@components/Heading';
import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import { ModalProps } from './types';
import { Button } from '@components/Button';

/**
 * Modal
 *
 * Exibe uma janela modal sobreposta à interface, centralizada ou alinhada à esquerda/direita/topo/baixo.
 *
 * @param isOpen Controla a visibilidade do modal.
 * @param isFiltered Diz se o modal é usado para filtro e está filtrado.
 * @param onClickCleanFilter Função que limpa o filtro.
 * @param onClose Função chamada ao fechar o modal (ex: clique fora ou no botão de fechar).
 * @param children Conteúdo a ser exibido dentro do modal.
 * @param positionHorizontal Posição horizontal do modal na tela: 'left', 'right' ou 'center'. Padrão: 'center'.
 * @param positionVertical Posição vertical do modal na tela: 'top', 'bottom' ou 'center'. Padrão: 'center'.
 * @param styleContent Estilos adicionais para o conteúdo do modal.
 * @param size 'full' preenche toda a tela, deve ser usado para imagens ou documentos. 'normal' é o modal padrão das aplicações.
 * @param maxHeight Define o tamanho máximo do conteúdo do modal (ex: '90vh'). Por padrão, o modal se ajusta ao conteúdo até esse limite.
 * @param iconLeftTitle Ícone exibido à esquerda do título do modal.
 */
export const Modal = ({
  isOpen,
  isFiltered,
  onClickCleanFilter,
  title,
  iconLeftTitle,
  onClose,
  onApply,
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
        <DivTopModal $size={size} $hasTitle={!!title}>
          {!isFiltered ? (
            <WrapperHeading>
              {iconLeftTitle}
              <Heading color={colors.emeraldGreen75} lineHeight="midshort">
                {title}
              </Heading>
            </WrapperHeading>
          ) : (
            <HeaderFilter>
              <WrapperHeading>
                {iconLeftTitle}
                <Heading color={colors.emeraldGreen75} lineHeight="midshort">
                  {title}
                </Heading>
              </WrapperHeading>
              <DivButtonCleanFilter>
                <Text fontSize="ssm" color={colors.green300} onClick={onClickCleanFilter}>
                  LIMPAR
                </Text>
              </DivButtonCleanFilter>
            </HeaderFilter>
          )}

          <CloseButton onClick={onClose}>
            <StyledXIcon width={38} height={38} $size={size} />
          </CloseButton>
        </DivTopModal>

        <DivChildren ref={contentRef}>
          {children}
          {showArrow && <AnimatedArrowRight />}
        </DivChildren>

        {onApply && (
          <DivButton>
            <Button size="md" text="Aplicar" variant="dark" onClick={onApply} />
          </DivButton>
        )}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

Modal.displayName = 'Modal';

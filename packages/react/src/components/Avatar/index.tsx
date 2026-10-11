import { ComponentProps } from 'react';
import { Tooltip } from '@components/Tooltip';
import {
  AvatarSkeleton,
  AvatarVariant,
  FallbackIcon,
  StyledImageContainer,
  TooltipImage,
} from './styles';

export type { AvatarVariant };

export interface AvatarProps extends ComponentProps<typeof StyledImageContainer> {
  src?: string;
  alt?: string;
  size?: string;
  variant?: AvatarVariant;
  fallbackColor?: string;
  withTooltip?: boolean;
  tooltipPlacement?: 'top' | 'bottom';
  isLoading?: boolean;
}

/**
 * Avatar
 *
 * @param withTooltip Ao passar o mouse (ou tocar, no mobile), mostra a foto ampliada num tooltip. Só aparece quando há `src`.
 * @param tooltipPlacement Posição do tooltip: 'top' (padrão) ou 'bottom'.
 * @param isLoading Mostra um skeleton do mesmo tamanho no lugar da foto, enquanto ela ainda não é conhecida — evita exibir o fallback antes de o dado carregar. Padrão `false`.
 */
export const Avatar = ({
  src,
  alt = 'Imagem do Usuário',
  size,
  variant = 'default',
  fallbackColor,
  withTooltip = false,
  tooltipPlacement = 'top',
  isLoading = false,
}: AvatarProps) => {
  if (isLoading) {
    return <AvatarSkeleton $size={size} role="img" aria-busy="true" aria-label={alt} />;
  }

  const avatar = (
    <StyledImageContainer $size={size} $variant={variant}>
      <div>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <FallbackIcon $variant={variant} $color={fallbackColor} />
        )}
      </div>
    </StyledImageContainer>
  );

  if (!withTooltip || !src) return avatar;

  // A seta fica a ~10px da borda do tooltip: left 0 a centraliza no avatar da tabela (19px).
  // Para baixo (avatar do topo, 40px), o deslocamento foi ajustado visualmente
  return (
    <Tooltip
      style={{ width: 'fit-content' }}
      contentInside={<TooltipImage src={src} alt={alt} />}
      arrowType={tooltipPlacement === 'bottom' ? 'topLeft' : 'bottomLeft'}
      positions={
        tooltipPlacement === 'bottom'
          ? { bottom: '8', left: '6' }
          : { top: '-110', left: '0' }
      }
    >
      {avatar}
    </Tooltip>
  );
};

Avatar.displayName = 'Avatar';

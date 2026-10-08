import { ComponentProps } from 'react';
import { AvatarVariant, FallbackIcon, StyledImageContainer } from './styles';

export type { AvatarVariant };

export interface AvatarProps extends ComponentProps<typeof StyledImageContainer> {
  src?: string;
  alt?: string;
  size?: string;
  variant?: AvatarVariant;
  fallbackColor?: string;
}

export const Avatar = ({
  src,
  alt = 'Imagem do Usuário',
  size,
  variant = 'default',
  fallbackColor,
}: AvatarProps) => {
  return (
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
};

Avatar.displayName = 'Avatar';

import { ComponentProps } from 'react';
import { FallbackIcon, StyledImageContainer } from './styles';

export interface AvatarProps extends ComponentProps<typeof StyledImageContainer> {
  src?: string;
}

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <StyledImageContainer>
      <div>{src ? <img src={src} alt="Imagem do Usuário" /> : <FallbackIcon />}</div>
    </StyledImageContainer>
  );
};

Avatar.displayName = 'Avatar';

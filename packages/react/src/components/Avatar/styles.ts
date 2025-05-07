import { styled } from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'
import { theme } from '../../styles/global.css'

export const AvatarContainer = styled(Avatar.Root)` 
  border-radius: ${theme.radii.full};
  display: inline-block;
  width: ${theme.space[12]};
  height: ${theme.space[12]};
  overflow: hidden;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray600};
  color: ${theme.colors.gray800};

  svg {
    width: ${theme.space[6]};
    height: ${theme.space[6]};
  }
`

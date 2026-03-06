import { ComponentProps } from 'react';
import { Avatar } from '@components/Avatar';
import { LoggedUser } from 'types/user.js';
import {
  CompactHeader,
  CompactUserName,
  CompactUserWrapper,
  Divisor,
  ExpandMenuButton,
  ExpandMenuButtonIcon,
  ExpandMenuButtonIconBox,
  ExpandMenuButtonText,
  StyledSideBarDesktopCompact,
} from './styles.js';

export interface SideBarDesktopCompactProps
  extends ComponentProps<typeof StyledSideBarDesktopCompact> {
  user: LoggedUser | null;
  toggleMenu?: () => void;
  expandLabel?: string;
  compactName?: string;
}

export const SideBarDesktopCompact = ({
  user,
  toggleMenu,
  expandLabel = 'menu',
  compactName,
  ...rest
}: SideBarDesktopCompactProps) => {
  return (
    <StyledSideBarDesktopCompact {...rest}>
      <CompactHeader />

      <Divisor />

      <CompactUserWrapper>
        <Avatar src={user?.foto || ''} />
        <CompactUserName>{compactName || 'Nome do usuário'}</CompactUserName>
      </CompactUserWrapper>

      <Divisor />

      <ExpandMenuButton
        type="button"
        onClick={toggleMenu}
        aria-label="Expandir menu lateral"
      >
        <ExpandMenuButtonIconBox>
          <ExpandMenuButtonIcon />
        </ExpandMenuButtonIconBox>
        <ExpandMenuButtonText>{expandLabel}</ExpandMenuButtonText>
      </ExpandMenuButton>
    </StyledSideBarDesktopCompact>
  );
};

SideBarDesktopCompact.displayName = 'SideBarDesktopCompact';

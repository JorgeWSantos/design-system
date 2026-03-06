import { ComponentProps } from 'react';
import { Avatar } from '@components/Avatar';
import { LoggedUser } from 'types/user.js';
import {
  CompactHeader,
  CompactUserName,
  CompactUserWrapper,
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
  userPlaceholder?: string;
}

export const SideBarDesktopCompact = ({
  user,
  toggleMenu,
  expandLabel = 'menu',
  userPlaceholder = 'Nome do usuário',
  ...rest
}: SideBarDesktopCompactProps) => {
  const firstName = user?.nome_pessoa?.trim().split(/\s+/)[0];
  const compactUserName = firstName
    ? `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()}`
    : userPlaceholder;

  return (
    <StyledSideBarDesktopCompact {...rest}>
      <CompactHeader />

      <CompactUserWrapper>
        <Avatar src={user?.foto || ''} />
        <CompactUserName>{compactUserName}</CompactUserName>
      </CompactUserWrapper>

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

import { useEffect, useState } from 'react';
import {
  CollapseMenuButton,
  CollapseMenuButtonIcon,
  CollapseMenuButtonText,
  StyledSideBarDesktop,
} from './styles.js';
import { TopSideMenu } from '@components/Layout/Desktop/TopSideMenu/index.js';
import { MenuType, SideMenu } from '@components/Layout/Desktop/SideMenu/index.js';
import { SideBarDesktopCompact } from '@components/Layout/Desktop/SideBarDesktopCompact/index.js';
import { LoggedUser } from 'types/user.js';

interface SideBarDesktopProps {
  user: LoggedUser | null;
  menu: MenuType;
  onLogin?: () => void;
  onLogout?: () => void;
  token: string;
  defaultCollapsed?: boolean;
  isCollapsed?: boolean;
  toggleMenu?: () => void;
  collapseButtonLabel?: string;
  expandButtonLabel?: string;
  compactName?: string;
}

export const SideBarDesktop = ({
  user,
  menu,
  onLogin,
  onLogout,
  token,
  isCollapsed,
  toggleMenu,
  collapseButtonLabel = 'recolher menu',
  expandButtonLabel = 'menu',
}: SideBarDesktopProps) => {
  const isAuthenticated = Boolean(user?.id_pessoa);

  const firstName = user?.nome_pessoa?.trim().split(/\s+/)[0];
  const compactUserName = isAuthenticated
    ? firstName
      ? `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()}`
      : user?.nome_pessoa || ''
    : 'Entrar';

  const [nameToShow, setNameToShow] = useState(compactUserName);

  useEffect(() => {
    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;

    if (isCollapsed) {
      setNameToShow(compactUserName);
    } else {
      timeoutId = globalThis.setTimeout(() => {
        setNameToShow(isAuthenticated ? user?.nome_pessoa || '' : '');
      }, 300);
    }

    return () => {
      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [isCollapsed, compactUserName, isAuthenticated, user]);

  if (isCollapsed) {
    return (
      <StyledSideBarDesktop $isCollapsed>
        <SideBarDesktopCompact
          user={user}
          compactName={nameToShow}
          toggleMenu={toggleMenu}
          expandLabel={expandButtonLabel}
          onLogin={isAuthenticated ? undefined : onLogin}
        />
      </StyledSideBarDesktop>
    );
  }

  return (
    <StyledSideBarDesktop>
      <TopSideMenu
        userDropdown={{
          userName: nameToShow,
          srcImage: isAuthenticated ? user?.foto || '' : '',
          onLogin: onLogin,
          onLogout: onLogout,
        }}
      />
      <SideMenu data={menu} userIsAuthenticated={isAuthenticated} token={token} />
      <CollapseMenuButton type="button" onClick={toggleMenu}>
        <CollapseMenuButtonIcon />
        <CollapseMenuButtonText>{collapseButtonLabel}</CollapseMenuButtonText>
      </CollapseMenuButton>
    </StyledSideBarDesktop>
  );
};

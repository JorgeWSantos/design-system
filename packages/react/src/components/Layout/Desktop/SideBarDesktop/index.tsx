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
  const firstName = user?.nome_pessoa?.trim().split(/\s+/)[0];
  const compactUserName = firstName
    ? `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()}`
    : 'Nome do usuário';

  const [nameToShow, setNameToShow] = useState(compactUserName);

  useEffect(() => {
    if (isCollapsed) {
      setNameToShow(compactUserName);
    } else {
      setTimeout(() => {
        setNameToShow(user?.nome_pessoa || 'Nome do usuário');
      }, 300);
    }
  }, [isCollapsed, compactUserName, user]);

  if (isCollapsed) {
    return (
      <StyledSideBarDesktop $isCollapsed>
        <SideBarDesktopCompact
          user={user}
          compactName={nameToShow}
          toggleMenu={toggleMenu}
          expandLabel={expandButtonLabel}
        />
      </StyledSideBarDesktop>
    );
  }

  return (
    <StyledSideBarDesktop>
      <TopSideMenu
        userDropdown={{
          userName: nameToShow,
          srcImage: user?.foto || '',
          onLogin: onLogin,
          onLogout: onLogout,
        }}
      />
      <SideMenu
        data={menu}
        userIsAuthenticated={!!(user?.id_pessoa || false)}
        token={token}
      />
      <CollapseMenuButton type="button" onClick={toggleMenu}>
        <CollapseMenuButtonIcon />
        <CollapseMenuButtonText>{collapseButtonLabel}</CollapseMenuButtonText>
      </CollapseMenuButton>
    </StyledSideBarDesktop>
  );
};

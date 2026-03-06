import { useState } from 'react';
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
}

export const SideBarDesktop = ({
  user,
  menu,
  onLogin,
  onLogout,
  token,
  defaultCollapsed = false,
  isCollapsed,
  toggleMenu,
  collapseButtonLabel = 'recolher menu',
  expandButtonLabel = 'menu',
}: SideBarDesktopProps) => {
  // const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  // const collapsed = typeof isCollapsed === 'boolean' ? isCollapsed : internalCollapsed;

  // const handleToggleCollapse = () => {
  //   const nextValue = !collapsed;

  //   if (typeof isCollapsed !== 'boolean') {
  //     setInternalCollapsed(nextValue);
  //   }

  //   onToggleCollapse?.(nextValue);
  // };

  if (isCollapsed) {
    return (
      <StyledSideBarDesktop $isCollapsed>
        <SideBarDesktopCompact
          user={user}
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
          userName: user?.nome_pessoa || '',
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

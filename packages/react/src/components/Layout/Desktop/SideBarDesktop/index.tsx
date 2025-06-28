import { StyledSideBarDesktop } from './styles.js';
import { TopSideMenu } from '@components/TopSideMenu/index.js';
import { MenuType, SideMenu } from '@components/SideMenu/index.js';
import { LoggedUser } from 'types/user.js';

interface SideBarDesktopProps {
  user: LoggedUser | null;
  menu: MenuType | []; // Replace 'any' with the correct type if available
  onLogin?: () => void;
  onLogout?: () => void;
}

export const SideBarDesktop = ({
  user,
  menu,
  onLogin,
  onLogout,
}: SideBarDesktopProps) => {
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
      <SideMenu data={menu} userIsAuthenticated={!!(user?.id_pessoa || false)} />
    </StyledSideBarDesktop>
  );
};

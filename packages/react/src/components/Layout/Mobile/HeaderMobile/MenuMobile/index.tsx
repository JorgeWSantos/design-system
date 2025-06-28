import { Text } from '@components/Text';
import { MenuItem, type MenuType } from '@components/SideMenu';
import {
  ContainerMenuComponent,
  ContainerUserDropDown,
  MenuLink,
  MenuList,
  StyledMenuItem,
  SubMenuItem,
  SubMenuLink,
  SubMenuList,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import React from 'react';
import { UserDropDown, UserDropDownProps } from '@components/UserDropdown';

interface MenuProps {
  menuIsOpen: boolean;
  menu: MenuType;
  handleOpenSubMenu: (index: number, item: MenuItem) => void;
  subMenuRef: React.RefObject<HTMLUListElement | null>;
  visibleSubmenu: number | null;
  userDropdown?: UserDropDownProps;
}

export const MenuMobile = ({
  menuIsOpen,
  menu,
  handleOpenSubMenu,
  subMenuRef,
  visibleSubmenu,
  userDropdown,
}: MenuProps) => {
  const userIsAuthenticated = !!userDropdown?.userName;

  const redirectToLogin = (link: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = link;
  };

  return (
    <ContainerMenuComponent $menuIsOpen={menuIsOpen}>
      <ContainerUserDropDown>
        <UserDropDown
          srcImage={userDropdown?.srcImage || ''}
          userName={userDropdown?.userName || ''}
          onLogout={userDropdown?.onLogout}
          onLogin={userDropdown?.onLogin}
        />
      </ContainerUserDropDown>

      <MenuList $menuIsOpen={menuIsOpen} $subMenuIsOpen={visibleSubmenu !== null}>
        {menu.map((item, i) => {
          const hasSubmenu = item.sub_menu && item.sub_menu.length > 0;

          return (
            <StyledMenuItem
              key={item.name}
              index={i}
              $subMenuIsOpen={visibleSubmenu !== null}
            >
              <MenuLink
                href={item.link}
                onClick={(e) => {
                  if (hasSubmenu) {
                    e.preventDefault();
                    handleOpenSubMenu(i, item);
                    return;
                  }

                  if (!userIsAuthenticated && item.need_login) {
                    redirectToLogin(item.link_login || '', e);
                  }
                }}
                $subMenuIsOpen={visibleSubmenu !== null}
              >
                <Text
                  fontSize="mdd"
                  fontWeight="regular"
                  lineHeight="shorter"
                  color={colors.white75}
                >
                  {item.name}
                </Text>
              </MenuLink>

              {hasSubmenu && (
                <SubMenuList ref={subMenuRef} $visible={item.open_submenu}>
                  {item.sub_menu.map((subitem) => (
                    <SubMenuItem key={subitem.name}>
                      <SubMenuLink
                        href={subitem.link}
                        onClick={(e) => {
                          if (!userIsAuthenticated && subitem.need_login) {
                            redirectToLogin(subitem.link_login || '', e);
                          }
                        }}
                      >
                        {subitem.name}
                      </SubMenuLink>
                    </SubMenuItem>
                  ))}
                </SubMenuList>
              )}
            </StyledMenuItem>
          );
        })}
      </MenuList>
    </ContainerMenuComponent>
  );
};

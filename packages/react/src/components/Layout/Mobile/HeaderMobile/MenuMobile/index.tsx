import { Text } from '@components/Text';
import {
  MenuItem,
  RedirectToLoginProps,
  type MenuType,
} from '@components/Layout/Desktop/SideMenu';
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

interface MenuMobileProps {
  menuIsOpen: boolean;
  menu: MenuType;
  handleOpenSubMenu: (index: number, item: MenuItem) => void;
  subMenuRef: React.RefObject<HTMLUListElement | null>;
  visibleSubmenu: number | null;
  token: string;
  userDropdown?: UserDropDownProps;
}

export const MenuMobile = ({
  menuIsOpen,
  menu,
  handleOpenSubMenu,
  subMenuRef,
  visibleSubmenu,
  token,
  userDropdown,
}: MenuMobileProps) => {
  const userIsAuthenticated = !!userDropdown?.userName;

  const redirectToLogin = ({ link, e, path }: RedirectToLoginProps) => {
    e.preventDefault();
    const linkToRedirect = path ? `${link}?path=${path}` : link;
    window.location.href = linkToRedirect;
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
                href={token ? `${item.link}?tk=${token}` : item.link}
                onClick={(e) => {
                  if (hasSubmenu) {
                    e.preventDefault();
                    handleOpenSubMenu(i, item);
                    return;
                  }

                  if (!userIsAuthenticated && item.need_login) {
                    redirectToLogin({
                      link: item.link_login || '',
                      e,
                      path: item.path || '',
                    });
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
                        href={token ? `${subitem.link}?tk=${token}` : subitem.link}
                        onClick={(e) => {
                          if (!userIsAuthenticated && subitem.need_login) {
                            redirectToLogin({
                              link: subitem.link_login || '',
                              e,
                              path: subitem.path || '',
                            });
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

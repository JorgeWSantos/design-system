import { Text } from '@components/Text';
import { MenuItem, type MenuType } from '@components/SideMenu';
import {
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

export const Menu = ({
  menuIsOpen,
  menu,
  handleOpenSubMenu,
  subMenuRef,
  visibleSubmenu,
  userDropdown,
}: MenuProps) => {
  return (
    <MenuList $menuIsOpen={menuIsOpen} $subMenuIsOpen={visibleSubmenu !== null}>
      <ContainerUserDropDown>
        <UserDropDown
          srcImage={userDropdown?.srcImage || ''}
          userName={userDropdown?.userName || ''}
          onLogout={userDropdown?.onLogout}
          onLogin={userDropdown?.onLogin}
        />
      </ContainerUserDropDown>

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
                    <SubMenuLink href={subitem.link}>{subitem.name}</SubMenuLink>
                  </SubMenuItem>
                ))}
              </SubMenuList>
            )}
          </StyledMenuItem>
        );
      })}
    </MenuList>
  );
};

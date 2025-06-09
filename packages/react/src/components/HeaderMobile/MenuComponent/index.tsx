import { Text } from '@components/Text';
import { type MenuItems } from '@components/SideMenu';
import {
  ContainerUserDropDown,
  MenuItem,
  MenuLink,
  MenuList,
  SubMenuItem,
  SubMenuLink,
  SubMenuList,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import React from 'react';
import { UserDropDown, UserDropDownProps } from '@components/UserDropdown';

interface MenuProps {
  menuIsOpen: boolean;
  menu: MenuItems[];
  handleOpenSubMenu: (index: number, item: MenuItems) => void;
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
        const hasSubmenu = 'submenu' in item;

        return (
          <MenuItem key={item.name} index={i} $subMenuIsOpen={visibleSubmenu !== null}>
            <MenuLink
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleOpenSubMenu(i, item);
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
                {item.submenu.map((subitem) => (
                  <SubMenuItem key={subitem.name}>
                    <SubMenuLink href={subitem.link}>{subitem.name}</SubMenuLink>
                  </SubMenuItem>
                ))}
              </SubMenuList>
            )}
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

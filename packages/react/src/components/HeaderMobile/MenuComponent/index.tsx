import { Text } from '@components/Text';
import { type MenuItems } from '@components/SideMenu';
import {
  MenuItem,
  MenuLink,
  MenuList,
  SubMenuItem,
  SubMenuLink,
  SubMenuList,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import React from 'react';

interface MenuProps {
  menuIsOpen: boolean;
  menu: MenuItems[];
  // eslint-disable-next-line no-unused-vars
  handleOpenSubMenu: (index: number, item: MenuItems) => void;
  subMenuRef: React.RefObject<HTMLUListElement | null>;
  visibleSubmenu: number | null;
}

export const Menu = ({
  menuIsOpen,
  menu,
  handleOpenSubMenu,
  subMenuRef,
  visibleSubmenu,
}: MenuProps) => {
  return (
    <MenuList menuIsOpen={menuIsOpen} subMenuIsOpen={visibleSubmenu !== null}>
      {menu.map((item, i) => {
        const hasSubmenu = 'submenu' in item;

        return (
          <MenuItem key={item.name} index={i} subMenuIsOpen={visibleSubmenu !== null}>
            <MenuLink
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleOpenSubMenu(i, item);
              }}
              subMenuIsOpen={visibleSubmenu !== null}
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
              <SubMenuList ref={subMenuRef} visible={item.open_submenu}>
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

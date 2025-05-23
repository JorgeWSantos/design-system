import { ComponentProps, ElementType, useState } from 'react';
import {
  MenuList,
  MenuItem,
  MenuLink,
  SubmenuList,
  SubmenuItem,
  SubmenuLink,
} from './styles';
import { Text } from '@abqm-ui2/react';

type MenuItemType = {
  name: string;
  link: string;
};

type MenuWithSubmenuType = {
  name: string;
  link: string;
  submenu: MenuItemType[];
  open_submenu: boolean;
};

type MenuItems = MenuItemType | MenuWithSubmenuType;

export interface SideMenuProps extends ComponentProps<typeof MenuList> {
  as?: ElementType;
  data: MenuItems[];
}

export const SideMenu = ({ data, ...rest }: SideMenuProps) => {
  const [menu, setMenu] = useState<MenuItems[]>(data);

  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState<number>(0);
  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);
  const [fadingOutIndex, setFadingOutIndex] = useState<number | null>(null);
  const [fadeInSubmenu, setFadeInSubmenu] = useState<number | null>(null);

  const handleOpenSubMenu = (index: number, item: MenuItems) => {
    if ('submenu' in item) {
      const isVisible = item.open_submenu;

      setMenu((prev) =>
        prev.map((m, i) =>
          i === index && 'submenu' in m ? { ...m, open_submenu: !m.open_submenu } : m
        )
      );

      if (!isVisible) {
        setVisibleSubmenu(index);
        requestAnimationFrame(() => setFadeInSubmenu(index));
      } else {
        setFadingOutIndex(index);
        setFadeInSubmenu(null);
        setTimeout(() => {
          setVisibleSubmenu(null);
          setFadingOutIndex(null);
        }, 200);
      }
    } else {
      setMenu(data); // reset menu
      setFadingOutIndex(index);
      setFadeInSubmenu(null);
      setTimeout(() => {
        setVisibleSubmenu(null);
        setFadingOutIndex(null);
      }, 200);
    }
  };

  return (
    <MenuList {...rest}>
      {menu.map((item, i) => {
        const hasSubmenu = 'submenu' in item;

        return (
          <MenuItem
            key={item.name}
            index={i}
            lastIndex={menu.length - 1}
            isSelected={menuItemSelectedIndex === i}
          >
            <MenuLink
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleOpenSubMenu(i, item);
                setMenuItemSelectedIndex(i);
              }}
            >
              <Text size="smm" fontWeight="regular" lineHeight="tight">
                {item.name}
              </Text>
            </MenuLink>

            {hasSubmenu && (visibleSubmenu === i || fadingOutIndex === i) && (
              <SubmenuList visible={fadeInSubmenu === i}>
                {item.submenu.map((subitem) => (
                  <SubmenuItem key={subitem.name}>
                    <SubmenuLink href={subitem.link}>{subitem.name}</SubmenuLink>
                  </SubmenuItem>
                ))}
              </SubmenuList>
            )}
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

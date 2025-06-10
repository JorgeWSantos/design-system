import { useEffect, useRef, useState } from 'react';
import {
  MenuList,
  MenuItem as StyledMenuItem,
  MenuLink,
  SubmenuList,
  SubmenuItem,
  SubmenuLink,
  CaretIcon,
} from './styles';
import { Text } from '../Text';
import { colors } from '@abqm-ds/tokens';
import { useClickOutside } from 'hooks/useClickOutside';
import { SideMenuProps, MenuType, MenuItem, SubMenuItem } from './types';

export const SideMenu = ({ data, ...rest }: SideMenuProps) => {
  const [menu, setMenu] = useState<MenuType>(data);

  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState<number>(0);
  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);
  const [fadingOutIndex, setFadingOutIndex] = useState<number | null>(null);
  const [fadeInSubmenu, setFadeInSubmenu] = useState<number | null>(null);
  const [currentIndexSelected, setCurrentIndexSelected] = useState<number>(0);

  useClickOutside(subMenuRef, (event: MouseEvent | TouchEvent) => {
    const target = event.target as HTMLElement;
    if (target?.closest('[data-submenu-trigger]')) return;

    setFadingOutIndex(currentIndexSelected);
    setFadeInSubmenu(null);
    setTimeout(() => {
      setVisibleSubmenu(null);
      setFadingOutIndex(null);
    }, 200);

    setMenu((prev: MenuType) =>
      prev.map((item: MenuItem) =>
        item.sub_menu && item.sub_menu.length > 0
          ? { ...item, open_submenu: false }
          : item
      )
    );
  });

  const handleOpenSubMenu = (index: number, item: MenuItem) => {
    setCurrentIndexSelected(index);

    const hasSubmenu = item.sub_menu && item.sub_menu.length > 0;
    if (hasSubmenu) {
      const isVisible = item.open_submenu;

      setMenu((prev: MenuType) =>
        prev.map((it: MenuItem, i: number) =>
          i === index && it.sub_menu && it.sub_menu.length > 0
            ? { ...it, open_submenu: !it.open_submenu }
            : it.sub_menu && it.sub_menu.length > 0
            ? { ...it, open_submenu: false }
            : it
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

  useEffect(() => {
    setMenu(data);
  }, [data]);

  return (
    <MenuList {...rest}>
      {menu.map((item: MenuItem, i: number) => {
        const hasSubmenu = item.sub_menu && item.sub_menu.length > 0;
        const isSelected = menuItemSelectedIndex === i;

        return (
          <StyledMenuItem
            key={item.name}
            index={i}
            data-submenu-trigger
            $lastIndex={menu.length - 1}
            $isSelected={isSelected}
          >
            <MenuLink
              href={item.link}
              onClick={(e) => {
                e.preventDefault();

                if (hasSubmenu) {
                  handleOpenSubMenu(i, item);
                  setMenuItemSelectedIndex(i);
                  return;
                }

                window.open(item.link, '_blank');
              }}
            >
              <Text
                fontSize="smm"
                fontWeight="regular"
                lineHeight="tight"
                color={colors.white85}
              >
                {item.name}
              </Text>
              <CaretIcon $isSelected={isSelected} />
            </MenuLink>

            {hasSubmenu && (visibleSubmenu === i || fadingOutIndex === i) && (
              <SubmenuList visible={fadeInSubmenu === i} ref={subMenuRef}>
                {item.sub_menu.map((subitem: SubMenuItem) => (
                  <SubmenuItem key={subitem.name}>
                    <SubmenuLink href={subitem.link}>{subitem.name}</SubmenuLink>
                  </SubmenuItem>
                ))}
              </SubmenuList>
            )}
          </StyledMenuItem>
        );
      })}
    </MenuList>
  );
};

SideMenu.displayName = 'SideMenu';

export * from './types';

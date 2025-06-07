import { ComponentProps, ElementType, useRef, useState } from 'react';
import {
  MenuList,
  MenuItem,
  MenuLink,
  SubmenuList,
  SubmenuItem,
  SubmenuLink,
  CaretIcon,
} from './styles';
import { Text } from '../Text';
import { colors } from '@abqm-ds/tokens';
import { useClickOutside } from 'hooks/useClickOutside';
import { SideMenuProps, MenuItems } from './types';

export const SideMenu = ({ data, ...rest }: SideMenuProps) => {
  const [menu, setMenu] = useState<MenuItems[]>(data);

  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState<number>(0);
  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);
  const [fadingOutIndex, setFadingOutIndex] = useState<number | null>(null);
  const [fadeInSubmenu, setFadeInSubmenu] = useState<number | null>(null);
  const [currentIndexSelected, setCurrentIndexSelected] = useState<number>(0);

  useClickOutside(subMenuRef, (event: MouseEvent | TouchEvent) => {
    const target = event.target as HTMLElement;

    const clickedInsideTrigger = target?.closest('[data-submenu-trigger]');
    if (clickedInsideTrigger) return;

    setFadingOutIndex(currentIndexSelected);
    setFadeInSubmenu(null);
    setTimeout(() => {
      setVisibleSubmenu(null);
      setFadingOutIndex(null);
    }, 200);

    setMenu((prev) =>
      prev.map((item) => ('submenu' in item ? { ...item, open_submenu: false } : item))
    );
  });

  const handleOpenSubMenu = (index: number, item: MenuItems) => {
    setCurrentIndexSelected(index);
    if ('submenu' in item) {
      const isVisible = item.open_submenu;

      setMenu((prev) =>
        prev.map((item, i) =>
          i === index && 'submenu' in item
            ? { ...item, open_submenu: !item.open_submenu }
            : { ...item, open_submenu: false }
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
        const isSelected = menuItemSelectedIndex === i;

        return (
          <MenuItem
            key={item.name}
            index={i}
            data-submenu-trigger
            lastIndex={menu.length - 1}
            isSelected={isSelected}
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
              <CaretIcon isSelected={isSelected} />
            </MenuLink>

            {hasSubmenu && (visibleSubmenu === i || fadingOutIndex === i) && (
              <SubmenuList visible={fadeInSubmenu === i} ref={subMenuRef}>
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

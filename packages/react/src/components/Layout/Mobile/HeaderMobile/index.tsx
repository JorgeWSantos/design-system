import type { MenuItem, MenuType } from '@components/SideMenu/types';
import HeaderMobileComponent from './HeaderMobileComponent';
import { Container } from './styles';
import { useEffect, useRef, useState } from 'react';
import { MenuMobile } from './MenuMobile';
import { UserDropDownProps } from '@components/UserDropdown';

export interface HeaderMobileProps {
  title?: string;
  page?: string;
  data: MenuType;
  userDropdown?: UserDropDownProps;
}

export const HeaderMobile = ({
  title = 'SEQM',
  page = 'Calendários',
  data,
  userDropdown,
  ...rest
}: HeaderMobileProps) => {
  const [menu, setMenu] = useState<MenuType>(data);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const initialNameMenu = 'Menu';
  const [userNavigation, setUserNavigation] = useState(initialNameMenu);

  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);

  const handleOpenSubMenu = (index: number, item: MenuItem) => {
    if (item.sub_menu && item.sub_menu.length > 0) {
      const isVisible = item.open_submenu;

      setMenu((prev: MenuType) =>
        prev.map((it, i) =>
          i === index && it.sub_menu && it.sub_menu.length > 0
            ? { ...it, open_submenu: !it.open_submenu }
            : it.sub_menu && it.sub_menu.length > 0
            ? { ...it, open_submenu: false }
            : it
        )
      );

      if (!isVisible) {
        setUserNavigation(item.name);
        setVisibleSubmenu(index);
      } else {
        setTimeout(() => {
          setVisibleSubmenu(null);
        }, 200);
      }
    } else {
      setMenu(data); // reset menu

      setTimeout(() => {
        setVisibleSubmenu(null);
      }, 200);
    }
  };

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    setMenu(data);
  }, [data]);

  return (
    <Container {...rest}>
      <HeaderMobileComponent
        title={title}
        page={menuIsOpen ? userNavigation : page}
        menuIsOpen={menuIsOpen}
        visibleSubmenu={visibleSubmenu !== null}
        hideSubMenu={() => {
          setVisibleSubmenu(null);
          setMenu(data);
          setUserNavigation(initialNameMenu);
        }}
        toggleMenu={toggleMenu}
      />

      <MenuMobile
        userDropdown={userDropdown}
        handleOpenSubMenu={handleOpenSubMenu}
        menu={menu}
        subMenuRef={subMenuRef}
        menuIsOpen={menuIsOpen}
        visibleSubmenu={visibleSubmenu}
      />
    </Container>
  );
};

// HeaderMobile.displayName = 'HeaderMobile';

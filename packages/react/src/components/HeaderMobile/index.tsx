import type { MenuItems } from '../SideMenu/types';
import HeaderMobileComponent from './HeaderMobileComponent';
import { Container } from './styles';
import { useRef, useState } from 'react';
import { Menu } from './MenuComponent';
import { UserDropDownProps } from '@components/UserDropdown';

export interface HeaderMobileProps {
  title?: string;
  page?: string;
  data: MenuItems[];
  userDropdown?: UserDropDownProps;
}

export const HeaderMobile = ({
  title = 'SEQM',
  page = 'Calendários',
  data,
  userDropdown,
  ...rest
}: HeaderMobileProps) => {
  const [menu, setMenu] = useState<MenuItems[]>(data);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const initialNameMenu = 'Menu';
  const [userNavigation, setUserNavigation] = useState(initialNameMenu);

  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);

  const handleOpenSubMenu = (index: number, item: MenuItems) => {
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

      <Menu
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

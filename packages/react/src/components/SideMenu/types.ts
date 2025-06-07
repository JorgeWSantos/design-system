import { ComponentProps, ElementType } from 'react';
import { MenuList } from './styles';

export type MenuItemType = {
  name: string;
  link: string;
};

export type MenuWithSubmenuType = {
  name: string;
  link: string;
  submenu: MenuItemType[];
  open_submenu: boolean;
};

export type MenuItems = MenuItemType | MenuWithSubmenuType;

export interface SideMenuProps extends ComponentProps<typeof MenuList> {
  as?: ElementType;
  data: MenuItems[];
}

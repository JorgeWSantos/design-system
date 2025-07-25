import React, { ComponentProps, ElementType } from 'react';
import { MenuList } from './styles';

// Tipagem para um item do submenu
export type SubMenuItem = {
  id: number;
  name: string;
  link: string;
  parent_id: number | null;
  open_submenu: boolean;
  sub_menu: SubMenuItem[] | null;
  need_login?: boolean;
  link_login?: string;
  path?: string;
};

// Tipagem para um item do menu principal
export type MenuItem = {
  id: number;
  name: string;
  link: string;
  parent_id: number | null;
  open_submenu: boolean;
  sub_menu: SubMenuItem[];
  need_login?: boolean;
  link_login?: string;
  path?: string;
};

export type MenuType = MenuItem[];

export interface SideMenuProps extends ComponentProps<typeof MenuList> {
  as?: ElementType;
  data: MenuType;
  userIsAuthenticated: boolean;
  token: string;
}

export interface RedirectToLoginProps {
  link: string;
  e: React.MouseEvent<HTMLAnchorElement>;
  path: string;
}

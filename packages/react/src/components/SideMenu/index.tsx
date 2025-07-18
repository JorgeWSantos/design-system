import { useState } from 'react';
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
import { SideMenuProps, MenuItem, SubMenuItem } from './types';

export const SideMenu = ({ data, ...rest }: SideMenuProps) => {
  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState<number>(0);

  return (
    <MenuList {...rest}>
      {data.map((item: MenuItem, i: number) => {
        const hasSubmenu = item.sub_menu && item.sub_menu.length > 0;
        const isSelected = menuItemSelectedIndex === i;

        return (
          <StyledMenuItem
            key={item.name}
            $index={i}
            data-submenu-trigger
            $lastIndex={data.length - 1}
            onMouseEnter={() => setMenuItemSelectedIndex(i)}
            onMouseLeave={() => setMenuItemSelectedIndex(-1)}
            $isSelected={isSelected}
          >
            <MenuLink
              href={item.link}
              onClick={(e) => {
                if (hasSubmenu) {
                  e.preventDefault();
                  return;
                }
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
              {hasSubmenu && <CaretIcon $isSelected={isSelected} />}
            </MenuLink>

            {hasSubmenu && isSelected && (
              <SubmenuList>
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

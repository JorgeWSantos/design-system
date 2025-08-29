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
import { Text } from '../../../Text';
import { colors } from '@abqm-ds/tokens';
import { SideMenuProps, MenuItem, SubMenuItem, RedirectToLoginProps } from './types';

export const SideMenu = ({
  data,
  userIsAuthenticated,
  token,
  ...rest
}: SideMenuProps) => {
  const [menuItemSelectedIndex, setMenuItemSelectedIndex] = useState<number>(-1);

  const redirectToLogin = ({ link, e, path }: RedirectToLoginProps) => {
    e.preventDefault();
    const linkToRedirect = path ? `${link}?path=${path}` : link;
    window.location.href = linkToRedirect;
  };

  return (
    <MenuList {...rest}>
      {data.map((item: MenuItem, i: number) => {
        const hasSubmenu = item.sub_menu && item.sub_menu.length > 0;
        const isSelected = menuItemSelectedIndex === i;

        return (
          <StyledMenuItem
            key={item.name}
            $index={i}
            $lastIndex={data.length - 1}
            onMouseEnter={() => setMenuItemSelectedIndex(i)}
            onMouseLeave={() => setMenuItemSelectedIndex(-1)}
            $isSelected={isSelected}
          >
            <MenuLink
              href={token ? `${item.link}?tk=${token}` : item.link}
              onClick={(e) => {
                if (hasSubmenu) {
                  e.preventDefault();
                  return;
                }

                if (!userIsAuthenticated && item.need_login) {
                  redirectToLogin({
                    link: item.link_login || '',
                    e,
                    path: item.path || '',
                  });
                }
              }}
            >
              <Text
                fontSize="ssm"
                fontWeight="regular"
                lineHeight="tight"
                color={colors.white75}
              >
                {item.name}
              </Text>
              {hasSubmenu && <CaretIcon $isSelected={isSelected} />}
            </MenuLink>

            {hasSubmenu && isSelected && (
              <SubmenuList>
                {item.sub_menu.map((subitem: SubMenuItem) => (
                  <SubmenuItem key={subitem.name}>
                    <SubmenuLink
                      href={token ? `${subitem.link}?tk=${token}` : subitem.link}
                      onClick={(e) => {
                        if (!userIsAuthenticated && subitem.need_login) {
                          redirectToLogin({
                            link: subitem.link_login || '',
                            e,
                            path: subitem.path || '',
                          });
                        }
                      }}
                    >
                      {subitem.name}
                    </SubmenuLink>
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

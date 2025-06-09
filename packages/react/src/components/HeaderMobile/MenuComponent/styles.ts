import { Text } from '@components/Text';
import { breakpointsPx, colors, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import React from 'react';

export const ContainerUserDropDown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const MenuList = styled.ul<{ $menuIsOpen: boolean; $subMenuIsOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;

  position: absolute;
  z-index: 1;
  top: 3.5rem;
  box-sizing: border-box;
  height: 93vh;
  width: 100%;

  box-sizing: border-box;

  align-self: stretch;

  background-color: ${colors.emeraldGreen75};

  backdrop-filter: blur(3.125rem);
  padding: ${space[6]};

  display: ${({ $menuIsOpen }) =>
    $menuIsOpen ? 'flex' : 'none'}; /* Hide menu off-screen */
  visibility: ${({ $menuIsOpen }) =>
    $menuIsOpen ? 'visible' : 'hidden'}; /* Hide menu off-screen */

  pointer-events: ${({ $menuIsOpen }) =>
    $menuIsOpen ? 'auto' : 'none'}; /* Disable interactions when not visible */

  /* Opacity now controlled only for fading effect */
  opacity: ${({ $menuIsOpen }) => ($menuIsOpen ? '1' : '0')};

  left: ${({ $menuIsOpen }) => ($menuIsOpen ? '10' : '100%')};
  transition: left 200ms ease-in-out, opacity 200ms ease-in-out;

  ${({ $subMenuIsOpen }) =>
    $subMenuIsOpen &&
    css`
      background-color: transparent;
    `}

  @media (min-width: ${breakpointsPx.md}) {
    height: 94vh;
  }
`;

export const MenuItem = styled.li<{ index: number; $subMenuIsOpen: boolean }>`
  max-height: 2.813rem;
  height: 2.813rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  transition: 0.3ms ease-in-out;

  border-bottom: ${radii.px} solid ${colors.white25};
  transition: left 200ms ease-in-out, opacity 200ms ease-in-out;

  ${({ $subMenuIsOpen }) =>
    $subMenuIsOpen &&
    css`
      border: none;
    `}
`;

export const MenuLink = styled.a<{ $subMenuIsOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  width: 100%;

  text-decoration: none;
  padding: ${space[3]};

  opacity: ${({ $subMenuIsOpen }) => ($subMenuIsOpen ? '0' : '1')};

  transition: left 200ms ease-in-out, opacity 200ms ease-in-out;
`;

export const MenuItemText = styled(Text).attrs({
  fontSize: 'mdd',
  fontWeight: 'regular',
  color: colors.white75,
})`
  line-height: 1.375rem;
`;

export const SubMenuList = styled.ul<{
  $visible: boolean;
  ref: React.RefObject<HTMLUListElement | null>;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;

  position: absolute;
  z-index: 1;
  top: 0;
  height: calc(100%);
  width: 100%;
  box-sizing: border-box;

  align-self: stretch;

  background-color: ${colors.emeraldGreen75};
  backdrop-filter: blur(3.125rem);
  padding: ${space[6]};

  display: ${({ $visible }) => ($visible ? 'flex' : 'none')}; /* Hide menu off-screen */
  visibility: ${({ $visible }) =>
    $visible ? 'visible' : 'hidden'}; /* Hide menu off-screen */

  pointer-events: ${({ $visible }) =>
    $visible ? 'auto' : 'none'}; /* Disable interactions when not visible */

  /* Opacity now controlled only for fading effect */
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};

  left: ${({ $visible }) => ($visible ? '0' : '100%')};
  transition: left 200ms ease-in-out, opacity 200ms ease-in-out;
`;

export const SubMenuItem = styled.li`
  max-height: 2.813rem;
  height: 2.813rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  transition: 0.3ms ease-in-out;

  border-bottom: ${radii.px} solid ${colors.white25};
`;

export const SubMenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  width: 100%;

  text-decoration: none;
  padding: ${space[3]};

  color: ${colors.white75};
`;

export const SubMenuItemText = styled(MenuItemText)``;

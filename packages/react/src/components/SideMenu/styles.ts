import { CaretRightIcon } from '@abqm-ds/icons';
import { colors, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
`;

export const MenuItem = styled.li<{
  index: number;
  $lastIndex: number;
  $isSelected?: boolean;
}>`
  min-width: 12.5rem;
  max-height: 2.125rem;
  margin-bottom: 0.063rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  background-color: ${colors.emeraldGreen50};
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  // round first item menu
  ${({ index }) =>
    index === 0 &&
    css`
      border-radius: ${space[1]} ${space[1]} 0rem 0rem;
    `}

  // round last item menu
  ${({ index, $lastIndex }) =>
    index === $lastIndex &&
    css`
      border-radius: 0rem 0rem ${space[1]} ${space[1]};
      border-bottom: none;
    `}

  position: relative;

  &:hover {
    background-color: ${colors.emeraldGreen25} !important;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover > ul,
  &:focus-within > ul {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  text-decoration: none;
  padding: ${space[2]} ${space[3]};
`;

export const CaretIcon = styled(CaretRightIcon)`
  width: 0.5rem;
  height: 0.5rem;
`;

export const SubmenuList = styled.ul`
  width: 16.5rem;
  position: absolute;

  left: 100%;
  top: 0;
  padding: ${space[4]};

  z-index: 1;

  border: ${radii.pxx} solid ${colors.white25};
  border-radius: ${space[1]};
  background-color: ${colors.emeraldGreen92};

  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const SubmenuItem = styled.li`
  width: 100%;
  height: 2.125rem;
  border-bottom: ${radii.px} solid ${colors.white25};
`;

export const SubmenuLink = styled.a`
  display: block;
  padding: ${space[2]} ${space[3]};
  color: ${colors.white75};
`;

import { CaretRightIcon } from '@abqm-ui2/icons';
import { colors, radii, space } from '@abqm-ui2/tokens';
import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
`;

export const MenuItem = styled.li<{
  index: number;
  lastIndex: number;
  isSelected?: boolean;
}>`
  min-width: 12.5rem;
  max-height: 2.125rem;
  margin-bottom: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  background-color: ${colors.emeraldGreen50};
  transition: 0.2ms ease-in-out;

  ${({ isSelected }) =>
    isSelected &&
    css`
      transition: 0.2ms ease-in-out;

      background-color: ${colors.emeraldGreen25} !important;
    `}

  // round first item menu
  ${({ index }) =>
    index === 0 &&
    css`
      border-radius: ${space[1]} ${space[1]} 0rem 0rem;
    `}

  // round last item menu
  ${({ index, lastIndex }) =>
    index === lastIndex &&
    css`
      border-radius: 0rem 0rem ${space[1]} ${space[1]};
      border-bottom: none;
    `}
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

interface CaretIconProps {
  isSelected: boolean;
}

export const CaretIcon = styled(CaretRightIcon)<CaretIconProps>`
  width: 0.5rem;
  height: 0.5rem;

  ${({ isSelected }) =>
    !isSelected &&
    css`
      path {
        fill: ${colors.white25};
        transition: 0.2ms ease-in-out;
      }
    `}
`;

export const SubmenuList = styled.ul<{ visible: boolean }>`
  width: 16.5rem;
  position: absolute;

  left: 101%;
  top: 0;
  padding: ${space[4]};

  z-index: 1;

  border: ${radii.pxx} solid ${colors.white25};
  border-radius: ${space[1]};
  background-color: ${colors.emeraldGreen92};

  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

export const SubmenuItem = styled.li`
  width: 100%;
  height: 34px;
  border-bottom: ${radii.px} solid ${colors.white25};
`;

export const SubmenuLink = styled.a`
  display: block;
  padding: ${space[2]} ${space[3]};
  color: ${colors.white75};
`;

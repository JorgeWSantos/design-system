import { colors, space } from '@abqm-ui2/tokens';
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
  min-width: 200px;
  max-height: 34px;
  margin-bottom: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  background-color: ${colors.emeraldGreen50};
  transition: 0.3s ease-in-out;

  ${({ isSelected }) =>
    isSelected &&
    css`
      transition: 0.3s ease-in-out;

      background-color: ${colors.emeraldGreen25} !important;
    `}

  // round first item menu
  ${({ index }) =>
    index === 0 &&
    css`
      border-radius: 0.25rem 0.25rem 0rem 0rem;
    `}

  // round last item menu
  ${({ index, lastIndex }) =>
    index === lastIndex &&
    css`
      border-radius: 0rem 0rem 0.25rem 0.25rem;
      border-bottom: none;
    `}
`;

export const MenuLink = styled.a`
  display: block;
  color: white;
  width: 100%;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
`;

export const SubmenuList = styled.ul<{ visible: boolean }>`
  position: absolute;
  left: 100%;
  top: 0;
  z-index: 1;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  padding: ${space[4]};
  background-color: ${colors.emeraldGreen92};
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

export const SubmenuItem = styled.li`
  width: 200px;
  height: 34px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SubmenuLink = styled.a`
  display: block;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
`;

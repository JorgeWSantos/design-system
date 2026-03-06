import { ArrowLeftSquareIcon, ChevronLeftIcon } from '@abqm-ds/icons';
import { colors, fontSizes, radii, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledSideBarDesktop = styled.div<{ $isCollapsed?: boolean }>`
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({ $isCollapsed }) => ($isCollapsed ? '4.5rem' : '12.5rem')};
  transition: width 0.2s ease-in-out;
`;

export const CollapseMenuButton = styled.button`
  width: 100%;
  margin-top: ${space[5]};
  display: flex;
  align-items: center;
  gap: ${space[2]};
  padding: 0;
  border: none;
  background: transparent;
  color: ${colors.white75};
  cursor: pointer;
`;

export const CollapseMenuButtonIcon = styled(ArrowLeftSquareIcon)`
  width: 1.25rem;
  height: 1.25rem;
  min-width: 1.25rem;

  padding: 0.063rem;

  path {
    fill: ${colors.white75};
  }
`;

export const CollapseMenuButtonText = styled.span`
  font-size: ${fontSizes.xs};
  color: ${colors.white75};
  line-height: 1;
  text-transform: lowercase;
`;

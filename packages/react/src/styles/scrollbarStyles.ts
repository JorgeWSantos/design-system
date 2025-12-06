import { colors } from '@abqm-ds/tokens';
import { css } from 'styled-components';

export const StyledCustomScrollbar = css`
  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.emeraldGreen5};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888 !important; /* Altere para a cor desejada */
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  scrollbar-color: ${colors.emeraldGreen10} transparent;
  scrollbar-width: thin;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${colors.emeraldGreen15} !important;
    }
    scrollbar-color: ${colors.emeraldGreen15} transparent !important;
  }
`;

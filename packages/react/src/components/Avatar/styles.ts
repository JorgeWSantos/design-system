import { PersonCircleIcon } from '@abqm-ds/icons';
import { colors, radii } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: ${radii.px} solid ${colors.white25};
  background-color: ${colors.white25};
  z-index: 1;

  div {
    background-color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`;

export const FallbackIcon = styled(PersonCircleIcon)`
  width: 100%;
  height: 100%;

  path {
    fill: ${colors.emeraldGreen25};
  }
`;

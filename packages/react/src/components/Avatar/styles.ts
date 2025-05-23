import { PersonCircleIcon } from '@abqm-ui2/icons';
import { colors } from '@abqm-ui2/tokens';
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
  border: 1px solid ${colors.white25};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 1px solid ${colors.white25};
    pointer-events: none;
  }
`;

export const FallbackIcon = styled(PersonCircleIcon)`
  width: 100%;
  height: 100%;

  path {
    fill: ${colors.white50};
  }
`;

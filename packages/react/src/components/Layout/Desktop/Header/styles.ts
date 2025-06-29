import { breakpointsPx, colors, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: red;
  height: 2.875rem;
  width: 100%;
  gap: ${space[1]};

  background: ${colors.white25};
  border-radius: ${space[2]} ${space[2]} 0 0;

  padding-top: ${space[1]};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;
  padding: 0rem ${space[6]};

  @media (max-width: ${breakpointsPx.sm}) {
    padding: 0rem ${space[3]};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${space[2]};
`;

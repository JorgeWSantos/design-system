import { breakpointsPx, colors, space } from '@abqm-ds/tokens';
import { Heading } from '@components/Heading';
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

export const StyledHeading = styled(Heading)`
  letter-spacing: -0.075rem;
`;

export const StyledHeadingSubTitle = styled(Heading)`
  letter-spacing: -0.075rem;
  margin-left: ${space[1]};
  color: ${colors.white50};
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

export const DivTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${space[2]};
`;

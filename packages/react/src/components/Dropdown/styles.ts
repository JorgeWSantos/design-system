import { colors, fontSizes, radii } from '@abqm-ui2/tokens';
import { css, styled } from 'styled-components';

interface ContainerProps {
  hasLabel: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 0.25rem;

  ${({ hasLabel }) =>
    hasLabel &&
    css`
      height: 52px;
    `}
`;

export const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: ${radii.sm};
  border: 1px solid ${colors.white50};
  background-color: ${colors.emeraldGreen25};

  max-height: 7.75rem;

  /* width: 100%; */

  padding: 0.5rem;
  /* padding: 0.532rem; */

  color: ${colors.white75};

  cursor: pointer;
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  overflow-y: scroll;

  min-height: 100%;
  max-height: 300px;
  width: 92%;

  padding: 0.5rem 0.5rem;

  gap: 0.25rem;

  backdrop-filter: blur(50px);

  background-color: ${colors.emeraldGreen75};
  color: ${colors.white75};

  border: 1px solid ${colors.emeraldGreen92};
  border-radius: ${radii.sm};

  cursor: pointer;
`;

export const Option = styled.div`
  border-bottom: 1px solid ${colors.emeraldGreen50};
  padding-bottom: 0.3rem;
  font-size: ${fontSizes.ssm};
`;

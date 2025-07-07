import { colors, lineHeights, radii, space } from '@abqm-ds/tokens';
import { Heading } from '@components/Heading';
import styled from 'styled-components';

export const StyledNavigatorDesktop = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  max-height: 3rem;
  border-bottom: ${radii.px} solid ${colors.white25};

  padding: 0 0 0 ${space[1]};
  /* gap: ${space[4]}; */
`;

export const ContainerButtonBack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 72px;
  height: 2rem;
  gap: ${space[1]};
  border-right: ${radii.px} solid ${colors.white25};
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: ${radii.px} solid ${colors.white85};
  color: white;
  cursor: pointer;
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${space[2]} 0 0 ${space[1]};
  gap: ${space[1]};
`;

export const DivTitles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 2rem;
  padding-left: ${space[2]};
`;

export const StyledHeadingHeaderNavigator = styled(Heading).withConfig({
  shouldForwardProp: (prop) => ['as', 'fontSize', 'color', 'children'].includes(prop),
})`
  letter-spacing: -0.0375rem;
  line-height: ${lineHeights.tight};
  color: ${colors.white85};
`;

export const ContentChildren = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  max-height: 2rem;
`;

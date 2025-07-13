import { colors, fontSizes, fontWeights, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const InfoBarWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 40px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${space[6]};

  border-radius: 0px 0px ${space[2]} ${space[2]};
  background: ${colors.white25};
  backdrop-filter: blur(50px);
`;
export const Registry = styled.p`
  color: ${colors.white75};
  font-size: ${fontSizes.xxs};
  font-weight: ${fontWeights.regular};
  line-height: 14px; /* 127.273% */
`;

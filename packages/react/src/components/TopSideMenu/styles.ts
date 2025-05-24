import { colors } from '@abqm-ui2/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const TopSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  width: 12.5rem;
  height: 7.5rem;
`;

export const TextSideMenu = styled(Text).attrs({
  fontWeight: 'regular',
  fontSize: 'xs',
  lineHeight: 'initial',
})`
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: ${colors.white75};
`;

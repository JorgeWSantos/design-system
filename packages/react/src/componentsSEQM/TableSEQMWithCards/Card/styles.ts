import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 0.25rem 1rem 0.25rem 0.75rem;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.375rem;
  border-bottom: 0.5px solid ${colors.white25};
  border-left: 2px solid ${colors.white25};
`;

export const TextTitleCard = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'regular',
  color: colors.white75,
})`
  line-height: 0.875rem;
`;

export const TextSubtitleCard = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'regular',
  color: colors.white85,
})`
  line-height: 1.125rem;
`;

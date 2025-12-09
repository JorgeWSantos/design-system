import { colors, space } from '@abqm-ds/tokens';
import { Heading } from '@components/Heading';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const DivTopTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 0 ${space[1]};
`;

export const HeadingModal = styled(Heading).attrs({})`
  line-height: 1.625rem;
  color: ${colors.black85};
  text-align: center;
  font-size: 1.1875rem;
`;

export const ModalTopTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

export const LocalText = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  color: colors.black75,
})`
  line-height: 1.125rem;
  text-align: center;
`;

export const StateText = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'regular',
  color: colors.black75,
})`
  line-height: 1.125rem;
  text-align: center;
`;

export const MessageNoProves = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  color: colors.black75,
})`
  margin-top: 2rem;
  line-height: 1.125rem;
  text-align: center;
`;

export const ContainerOrderResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

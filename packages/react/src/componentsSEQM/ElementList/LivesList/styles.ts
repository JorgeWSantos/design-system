import { colors, space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const DivModality = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  padding: ${space[1]} ${space[1]} 0rem ${space[1]};
  gap: 0.5rem;
  padding-bottom: 1rem;

  border-bottom: 0.5px solid var(--Preto-15, rgba(0, 39, 16, 0.15));

  cursor: pointer;

  button {
    width: 3rem;
    height: 3rem;
  }

  svg {
    padding: 0 !important;
  }

  & img,
  & span,
  & p {
    transition: filter 0.5s, text-shadow 0.3s, color 0.3s;
  }

  &:hover img,
  &:hover span,
  &:hover p {
    filter: brightness(130%);
    text-shadow: 0 0 1px ${colors.emeraldGreen25}, 0 0 1px ${colors.emeraldGreen25};
    color: ${colors.emeraldGreen75};
  }
`;

export const DivModalityTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NameProveTitle = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  color: colors.black75,
  fontFamily: 'secondary',
})`
  line-height: 1.125rem;
`;

export const NameCategoryText = styled(Text).attrs({
  fontSize: 'sm',
  fontWeight: 'regular',
  color: colors.black75,
})`
  line-height: 1.125rem;
`;

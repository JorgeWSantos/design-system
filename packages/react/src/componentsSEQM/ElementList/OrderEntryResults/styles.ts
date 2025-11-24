import { colors, space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const DivModality = styled.div`
  display: flex;
  flex-direction: column;
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

  .top-proves {
    transition: filter 0.5s, text-shadow 0.3s, color 0.3s;
  }

  &:hover {
    .top-proves {
      p {
        filter: brightness(130%);
        text-shadow: 0 0 1px ${colors.emeraldGreen10}, 0 0 1px ${colors.emeraldGreen10};
        color: ${colors.emeraldGreen75};
      }
    }
  }
`;

export const ContainerTopProves = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DivModalityTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerProves = styled.div`
  display: flex;
  padding-left: 3.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

export const DivProve = styled.div`
  display: flex;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  align-self: stretch;

  border-radius: 0.375rem;
  border: 0.5px solid ${colors.black25};

  transition: filter 0.5s, text-shadow 0.3s, color 0.3s;

  &:hover {
    p {
      filter: brightness(130%);
      color: ${colors.emeraldGreen92};
    }
    svg {
      filter: brightness(110%);
    }

    border: 0.5px solid ${colors.black40};
  }
`;

export const WrapperTextIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const NameProveTitle = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  color: colors.black75,
  fontFamily: 'secondary',
})`
  line-height: 1.125rem;
`;

export const NameProveText = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'regular',
  color: colors.black50,
})`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.25rem;
  line-height: 1.125rem;
`;

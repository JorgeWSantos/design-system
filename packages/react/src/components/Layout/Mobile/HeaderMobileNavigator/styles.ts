import { colors, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const StyledNavigatorMobile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  max-height: 2.5rem;
  border-bottom: ${radii.px} solid ${colors.white25};

  padding: ${space[1]} ${space[4]} ${space[1]} ${space[4]};
  gap: ${space[2]};
`;

export const ContainerButtonBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
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

export const StyledWrapperSearch = styled.div<{ $searchIsOpen?: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
  /* width: 100%; */

  ${({ $searchIsOpen }) =>
    $searchIsOpen
      ? css`
          width: 100%;
        `
      : css`
          width: unset;
        `}
`;

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white25};

  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${space[2]};
  margin-left: auto;
`;

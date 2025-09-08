import { LaurelIcon } from '@abqm-ds/icons';
import { Text } from '@components/Text';
import { breakpointsPx, colors, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

const scaleImages = 1;
const scaleImagesMobile = 1.05;

export const ContainerAnimalTableDataType = styled.div``;

export const ContainerImage = styled(ContainerAnimalTableDataType)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 1.25rem;

  @media (max-width: ${breakpointsPx.lg}) {
    height: 2rem;
  }
`;

export const DivImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 1.188rem;

  img,
  .image-animal-default {
    transform: scale(${scaleImages});
    position: relative;
    border-radius: 50%;
    min-width: 1.188rem;
    max-width: 1.188rem;
    height: 1.188rem;
    object-fit: cover;
    border: 1px solid transparent;
    z-index: 1;

    @media (max-width: ${breakpointsPx.lg}) {
      transform: scale(${scaleImagesMobile});
    }
  }
`;

export const DivBorder = styled.div<{ $medalColor: string }>`
  position: absolute;
  left: -0.05rem;
  top: -0.05rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ $medalColor }) => $medalColor};
  z-index: 0;
  transform: scale(${scaleImages});

  @media (max-width: ${breakpointsPx.lg}) {
    transform: scale(${scaleImagesMobile});
  }
`;

export const LaurelImage = styled(LaurelIcon)`
  position: absolute;
  margin-top: -1rem;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: scale(${scaleImages});

  @media (max-width: ${breakpointsPx.lg}) {
    transform: scale(${scaleImagesMobile});
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 100%;
`;

export const DivTexts = styled.div<{
  $hasClick: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: filter 0.3s;

  ${({ $hasClick }) =>
    $hasClick &&
    css`
      cursor: pointer;

      &:hover {
        span {
          filter: brightness(1.2) contrast(1.2);
        }
      }
    `}
`;

export const StyledTextHallOfFameNameAnimal = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
})<{ $isHallOfFameAnimal: boolean; $bolder: boolean }>`
  display: flex;
  gap: 0.25rem;
  white-space: nowrap;
  color: ${({ $isHallOfFameAnimal }) =>
    $isHallOfFameAnimal ? colors.brown700 : 'inherit'};
  height: 14px;
  margin-bottom: -0.1rem;

  font-weight: ${({ $bolder }) => ($bolder ? fontWeights.semiBold : fontWeights.regular)};

  span {
    white-space: nowrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.25rem;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;

export const StyledTextHallOfFame = styled(Text)`
  font-size: 5.5pt;
  font-weight: ${fontWeights.semiBold};
  color: ${colors.brown700};
  text-transform: uppercase;

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.x};
  }
`;

export const StyledTextRegister = styled(Text)<{
  $bolder: boolean;
}>`
  font-size: 7.2pt;
  font-weight: ${({ $bolder }) => ($bolder ? fontWeights.semiBold : fontWeights.regular)};
  text-transform: uppercase;
  margin-top: -0.08rem;
  margin-bottom: -0.08rem;

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.xxs};
  }
`;

export const MedalImg = styled.img`
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1/1;
  margin-top: -0.06rem;
`;

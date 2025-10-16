import styled, { css } from 'styled-components';
import { breakpointsPx, colors, fonts, fontWeights, space } from '@abqm-ds/tokens';
import { FooterTypes } from '..';

export const ContainerContent = styled.div<{
  $footerType?: FooterTypes;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${space[2]} ${space[2]} 0 0;

  padding: ${space[4]} ${space[10]};

  ${({ $footerType }) =>
    $footerType === 'medium' &&
    css`
      height: 100%;
      padding: 0.125rem ${space[10]};
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    height: 100%;
    padding: 0.125rem ${space[10]};
  }

  @media (max-width: ${breakpointsPx.sm}) {
    height: 100%;
    padding: ${space[1]} ${space[2]};
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: ${space[1.5]};

  margin: 0 auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: ${space[1]};
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white50};
  border-radius: 50%;

  width: 1.25rem;
  height: 1.25rem;

  @media (max-width: ${breakpointsPx.lg}) {
    width: 1rem;
    height: 1rem;
    max-width: 1rem;
    max-height: 1rem;
  }
`;

export const SocialText = styled.a`
  font-family: ${fontWeights.regular};
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem; /* 127.273% */
  color: ${colors.white50};
`;

export const Circle = styled.div`
  width: 0.125rem;
  height: 0.125rem;
  background: ${colors.white50};
  border-radius: 50%;
`;

export const SiteText = styled.a`
  font-family: ${fonts.default};
  font-style: normal;
  font-weight: ${fontWeights.semiBold};
  font-size: 0.6875rem;
  line-height: 0.875rem;
  color: ${colors.white50};
`;

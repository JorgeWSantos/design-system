import { SizeType } from 'types/common'
import { theme } from '../../../styles'
import styled, { css } from 'styled-components'

interface StyledContainerProps {
  size: SizeType
}

interface StyledSocialIconProps {
  size: SizeType
}


export const ContainerContent = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 81.75rem;

  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;

    ${({ size }) => (size === 'lg' || !size) && css`
    padding: ${theme.space[4]} ${theme.space[10]};
  `}

  ${({ size }) => size === 'md' && css`
    padding: .125rem ${theme.space[10]};
    height: 100%;
  `}

  ${({ size }) => size === 'sm' && css`
    height: 100%;
    padding: ${theme.space[1]} ${theme.space[2]};
  `}
`

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: ${theme.space[1.5]};

  margin: 0 auto;
`

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: ${theme.space[1]};
`

export const SocialIcon = styled.div<StyledSocialIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.white50};
  border-radius: 50%;

  ${({ size }) => (size === 'lg' || !size) && css`
    width: 1.25rem;
    height: 1.25rem;
  `}

  ${({ size }) => size === 'md' && css`
    width: 1rem;
    height: 1rem;
    max-width: 1rem;
    max-height: 1rem;
  `}
`

export const SocialText = styled.span`
  font-family: ${theme.fontWeights.regular};
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem; /* 127.273% */
  color: ${theme.colors.white50};
`

export const Circle = styled.div`
  width: 0.125rem;
  height: 0.125rem;
  background: ${theme.colors.white50};
  border-radius: 50%;
`

export const SiteText = styled.span`
  font-family: ${theme.fonts.default};
  font-style: normal;
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 0.6875rem;
  line-height: 0.875rem;
  color: ${theme.colors.white50};
`
import { theme } from '../../../styles'
import styled from 'styled-components'

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${theme.space[4]} ${theme.space[10]};
  gap: ${theme.space[4]};

  max-width: 81.75rem;

  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;
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

export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.space[1]};
  width: 1.25rem;
  height: 1.25rem;
  background: ${theme.colors.white50};
  border-radius: 1.279rem;
`

export const SocialText = styled.span`
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  font-size: 0.688rem;
  line-height: 0.875rem;
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
  font-size: 0.688rem;
  line-height: 0.875rem;
  color: ${theme.colors.white50};
`
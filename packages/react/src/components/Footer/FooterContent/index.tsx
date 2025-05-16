import { ComponentProps, ElementType } from 'react'
import {
  ContainerContent,
  Social,
  SocialIcons,
  SocialText,
  Circle,
  SiteText
} from './styles'

import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@abqm-ui2/icons'

export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {
  as?: ElementType,
}

export const FooterContent = () => {
  return (
    <ContainerContent>
      <Social>
        <SocialIcons>
          <YoutubeIcon width={30} height={30} />
          <InstagramIcon width={30} height={30} />
          <FacebookIcon width={30} height={30} fill='white' />
        </SocialIcons>
        <SocialText>@ABQMOFICIAL</SocialText>
        <Circle />
        <SiteText>WWW.ABQM.COM.BR</SiteText>
      </Social>
    </ContainerContent>
  )
}

FooterContent.displayName = 'FooterContent'

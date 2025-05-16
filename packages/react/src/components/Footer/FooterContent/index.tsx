import { ComponentProps, ElementType } from 'react'
import {
  ContainerContent,
  Social,
  SocialIcons,
  SocialText,
  Circle,
  SiteText
} from './styles'

import { Facebook, Instagram, Youtube } from '@abqm-ui2/icons'


export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {
  as?: ElementType,
}

export const FooterContent = () => {
  return (
    <ContainerContent>
      <Social>
        <SocialIcons>
          <Youtube width={30} height={30} />
          <Instagram width={30} height={30} />
          <Facebook width={30} height={30} />
        </SocialIcons>
        <SocialText>@ABQMOFICIAL</SocialText>
        <Circle />
        <SiteText>WWW.ABQM.COM.BR</SiteText>
      </Social>
    </ContainerContent>
  )
}

FooterContent.displayName = 'FooterContent'

import { ComponentProps, ElementType } from 'react'
import {
  ContainerContent,
  Social,
  SocialIcons,
  SocialIcon,
  SocialText,
  Circle,
  SiteText
} from './styles'

export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {
  as?: ElementType,
}

export const FooterContent = () => {
  return (
    <ContainerContent>
      <Social>
        <SocialIcons>
          {/* <SocialIcon>
            <img src={youtubeIcon} alt="Ícone do Youtube" />
          </SocialIcon>
          <SocialIcon>
            <img src={instagramIcon} alt="Ícone do Instagram" />
          </SocialIcon> */}
          <SocialIcon>
            <img src={''} />
          </SocialIcon>
        </SocialIcons>
        <SocialText>@ABQMOFICIAL</SocialText>
        <Circle />
        <SiteText>WWW.ABQM.COM.BR</SiteText>
      </Social>
    </ContainerContent>
  )
}

FooterContent.displayName = 'FooterContent'

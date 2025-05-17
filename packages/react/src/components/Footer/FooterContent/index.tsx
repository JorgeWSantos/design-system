import { ComponentProps } from 'react'
import {
  ContainerContent,
  Social,
  SocialIcons,
  SocialText,
  Circle,
  SiteText,
  SocialIcon
} from './styles'

import { Facebook, Instagram, Youtube } from '@abqm-ui2/icons'
import { Size } from '../styles'


export interface FooterContentProps extends ComponentProps<typeof ContainerContent> {
  showIcons?: boolean
  size: Size
}

const socialIcons = (size: Size) => {

  if (size === 'md') {
    return (
      <SocialIcons>
        <SocialIcon size={size}>
          <Youtube width={12} height={12} />
        </SocialIcon>
        <SocialIcon size={size}>
          <Instagram width={12} height={12} />
        </SocialIcon>
        <SocialIcon size={size}>
          <Facebook width={14} height={13} />
        </SocialIcon>
      </SocialIcons>
    )
  }

  return (
    <SocialIcons>
      <SocialIcon size={size}>
        <Youtube width={14} height={14} style={{}} />
      </SocialIcon>
      <SocialIcon size={size}>
        <Instagram
          width={14}
          height={14}
          style={{ marginLeft: '0px', marginTop: '2px' }}
        />
      </SocialIcon>
      <SocialIcon size={size}>
        <Facebook
          width={14}
          height={14}
          style={{ marginTop: '1px' }}
        />
      </SocialIcon>
    </SocialIcons>
  )
}

export const FooterContent = ({ showIcons, size }: FooterContentProps) => {
  return (
    <ContainerContent size={size}>
      <Social>
        {showIcons && socialIcons(size)}
        <SocialText>@ABQMOFICIAL</SocialText>
        <Circle />
        <SiteText>WWW.ABQM.COM.BR</SiteText>
      </Social>
    </ContainerContent>
  )
}

FooterContent.displayName = 'FooterContent'

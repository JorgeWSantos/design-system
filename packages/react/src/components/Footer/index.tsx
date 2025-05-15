import { ComponentProps, CSSProperties, ElementType } from 'react'
import { FooterWrapper } from './styles'
import { FooterContent } from './FooterContent'

export interface FooterProps extends ComponentProps<typeof FooterWrapper> {
  as?: ElementType,
  style: CSSProperties
}


export const Footer = ({ style, ...rest }: FooterProps) => {
  return (
    <FooterWrapper style={style} {...rest}>
      <FooterContent

      />
    </FooterWrapper>
  )
}

Footer.displayName = 'Footer'

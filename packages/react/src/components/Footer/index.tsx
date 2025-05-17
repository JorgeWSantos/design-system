import { ComponentProps, CSSProperties, ElementType } from 'react'
import { FooterWrapper, Size } from './styles'
import { FooterContent } from './FooterContent'
import { ColorBar } from '@components/ColorBar'

export interface FooterProps extends ComponentProps<typeof FooterWrapper> {
  as?: ElementType,
  style: CSSProperties,
  showIcons?: boolean
  size: Size
}


export const Footer = ({ style, showIcons = true, size, ...rest }: FooterProps) => {
  return (
    <FooterWrapper size={size} style={style} {...rest}>
      <FooterContent showIcons={showIcons} size={size} />
      <ColorBar />
    </FooterWrapper>
  )
}

Footer.displayName = 'Footer'

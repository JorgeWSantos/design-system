import { ComponentProps, ElementType } from 'react';
import { FooterWrapper } from './styles';
import { FooterContent } from './FooterContent';
import { ColorBar } from '@components/ColorBar';

export type FooterTypes = 'large' | 'medium' | 'small';

export interface FooterProps extends ComponentProps<typeof FooterWrapper> {
  as?: ElementType;
  footerType?: FooterTypes;
}

export const Footer = ({ footerType, ...rest }: FooterProps) => {
  return (
    <FooterWrapper $footerType={footerType} {...rest}>
      <FooterContent footerType={footerType} />
      <ColorBar />
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';

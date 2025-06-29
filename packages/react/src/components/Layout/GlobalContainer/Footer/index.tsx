import { ComponentProps, ElementType } from 'react';
import { FooterWrapper } from './styles';
import { FooterContent } from './FooterContent';
import { ColorBar } from '@components/ColorBar';

export interface FooterProps extends ComponentProps<typeof FooterWrapper> {
  as?: ElementType;
}

export const Footer = ({ ...rest }: FooterProps) => {
  return (
    <FooterWrapper {...rest}>
      <FooterContent />
      <ColorBar />
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';

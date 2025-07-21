import React, { ComponentProps, ElementType } from 'react';
import { FooterWithButtonsWrapper } from './styles';
import { FooterButton, FooterButtonProps } from './FooterButton';

export interface FooterWithButtonsProps
  extends ComponentProps<typeof FooterWithButtonsWrapper> {
  as?: ElementType;
  footerButtonsMobile: Array<FooterButtonProps & { icon: React.ReactNode }>;
}

export const FooterWithButtons = ({
  footerButtonsMobile,
  ...rest
}: FooterWithButtonsProps) => {
  return (
    <FooterWithButtonsWrapper {...rest}>
      {footerButtonsMobile.map((button, index) => (
        <FooterButton
          label={button.label}
          disabled={button.disabled}
          onClick={button.onClick}
          key={index}
          isActive={button.isActive}
          variant={button.variant}
        >
          {button.icon}
        </FooterButton>
      ))}
    </FooterWithButtonsWrapper>
  );
};

FooterWithButtons.displayName = 'FooterWithButtons';

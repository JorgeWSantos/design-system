import React, { ComponentProps, ElementType } from 'react';
import { FooterWithButtonsWrapper } from './styles';
import { FooterButton, FooterButtonProps } from './FooterButton';

type FooterWithButtonsPropsType = Array<
  Omit<FooterButtonProps, 'children'> & { icon: React.ReactNode }
>;

export interface FooterWithButtonsProps
  extends ComponentProps<typeof FooterWithButtonsWrapper> {
  footerButtonsMobile: FooterWithButtonsPropsType;
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
          showOptionsToShare={button.showOptionsToShare}
        >
          {button.icon}
        </FooterButton>
      ))}
    </FooterWithButtonsWrapper>
  );
};

FooterWithButtons.displayName = 'FooterWithButtons';

export type { FooterWithButtonsPropsType };

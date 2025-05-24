import { ComponentProps, ElementType } from 'react';
import { TextSideMenu, TopSideWrapper } from './styles';
import { LogoSeqmIcon } from '@abqm-ui2/icons';
import { UserDropDown } from '@components/UserDropdown';

export interface TopSideMenuProps extends ComponentProps<typeof TopSideWrapper> {
  as?: ElementType;
  text?: string;
  userName?: string;
  srcImage: string;
}

export const TopSideMenu = ({
  text = 'SISTEMA DE ESPORTES',
  userName = 'Jhon Doe',
  srcImage = '',
  ...rest
}: TopSideMenuProps) => {
  return (
    <TopSideWrapper {...rest}>
      <LogoSeqmIcon width={'108px'} height={'48px'} />
      <TextSideMenu>{text}</TextSideMenu>
      <UserDropDown userName={userName} srcImage={srcImage} />
    </TopSideWrapper>
  );
};

TopSideMenu.displayName = 'TopSideMenu';

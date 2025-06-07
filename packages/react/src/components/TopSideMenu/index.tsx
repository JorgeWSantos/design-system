import { ComponentProps, ElementType } from 'react';
import { TextSideMenu, TopSideWrapper } from './styles';
import { LogoSeqmIcon } from '@abqm-ds/icons';
import { UserDropDown } from '@components/UserDropdown';

export interface TopSideMenuProps extends ComponentProps<typeof TopSideWrapper> {
  as?: ElementType;
  text?: string;
  userName?: string;
  srcImage: string;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const TopSideMenu = ({
  text = 'SISTEMA DE ESPORTES',
  userName = 'Jhon Doe',
  srcImage = '',
  onLogin,
  onLogout,
  ...rest
}: TopSideMenuProps) => {
  return (
    <TopSideWrapper {...rest}>
      <LogoSeqmIcon width={'6.75rem'} height={'3rem'} />
      <TextSideMenu>{text}</TextSideMenu>
      <UserDropDown
        userName={userName}
        srcImage={srcImage}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </TopSideWrapper>
  );
};

TopSideMenu.displayName = 'TopSideMenu';

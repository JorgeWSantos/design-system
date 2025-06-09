import { ComponentProps, ElementType } from 'react';
import { TextSideMenu, TopSideWrapper } from './styles';
import { LogoSeqmIcon } from '@abqm-ds/icons';
import { UserDropDown, UserDropDownProps } from '@components/UserDropdown';

export interface TopSideMenuProps extends ComponentProps<typeof TopSideWrapper> {
  as?: ElementType;
  userDropdown?: UserDropDownProps;
  text?: string;
}

export const TopSideMenu = ({
  text = 'SISTEMA DE ESPORTES',
  userDropdown,
  ...rest
}: TopSideMenuProps) => {
  return (
    <TopSideWrapper {...rest}>
      <LogoSeqmIcon width={'6.75rem'} height={'3rem'} />
      <TextSideMenu>{text}</TextSideMenu>
      <UserDropDown
        userName={userDropdown?.userName || ''}
        srcImage={userDropdown?.srcImage || ''}
        onLogin={userDropdown?.onLogin}
        onLogout={userDropdown?.onLogout}
      />
    </TopSideWrapper>
  );
};

TopSideMenu.displayName = 'TopSideMenu';

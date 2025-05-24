import { ComponentProps, ElementType } from 'react';
import { AvatarDiv, Dropdown, UserDropdownWrapper } from './styles';
import { Text } from '@components/Text';
import { CaretDownIcon } from '@abqm-ui2/icons';

export interface UserDropDownProps extends ComponentProps<typeof UserDropdownWrapper> {
  as?: ElementType;
  userName: string;
  srcImage: string;
}

export const UserDropDown = ({
  userName = 'Nome do usuário',
  srcImage = '',
  ...rest
}: UserDropDownProps) => {
  return (
    <UserDropdownWrapper {...rest}>
      <AvatarDiv src={srcImage} />
      <Dropdown>
        <Text fontSize="ssm">{userName}</Text>
        <CaretDownIcon width={'8.7px'} height={'5.6px'} />
      </Dropdown>
    </UserDropdownWrapper>
  );
};

UserDropDown.displayName = 'UserDropDown';

import { LogoSeqmMobileIcon } from '@abqm-ds/icons';
import * as S from './styles';

interface Props {
  title: string;
  page: string;
  menuIsOpen: boolean;
  hideSubMenu: () => void;
  toggleMenu: () => void;
  visibleSubmenu: boolean;
}

const HeaderMobileComponent = ({
  title,
  page,
  menuIsOpen,
  visibleSubmenu,
  hideSubMenu,
  toggleMenu,
}: Props) => {
  return (
    <S.Container>
      <LogoSeqmMobileIcon width={70} height={49.7} />

      <S.DivLabels>
        <S.Title>{title}</S.Title>
        <S.Label>{page}</S.Label>
      </S.DivLabels>

      <S.DivButtons>
        <S.MenuHamburgueIconWrapper onClick={!visibleSubmenu ? toggleMenu : hideSubMenu}>
          <S.MenuHamburgueIcon $menuIsOpen={menuIsOpen} />
          <S.CloseMenuIcon $menuIsOpen={visibleSubmenu ? false : menuIsOpen} />
          <S.BackMenuIcon $subMenuIsOpen={visibleSubmenu} />
        </S.MenuHamburgueIconWrapper>
      </S.DivButtons>
    </S.Container>
  );
};

export default HeaderMobileComponent;

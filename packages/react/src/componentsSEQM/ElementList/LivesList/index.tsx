import {
  DivModality,
  DivModalityTexts,
  NameCategoryText,
  NameProveTitle,
} from './styles';
import { ListaAoVivo } from '../types';
import { getModalityIcon } from 'utils';
import { RoundedModalityButton } from '@componentsSEQM/RoundedModalityButton';

interface LivesListProps {
  event: ListaAoVivo;
  idx: number;
  nid_agrupa_evento: number;
  is_official: boolean;
  token: string;
  URL_AO_VIVO: string;
}

const LivesList = ({
  event,
  idx,
  nid_agrupa_evento,
  is_official,
  token,
  URL_AO_VIVO,
}: LivesListProps) => {
  const Icon = getModalityIcon(event.nid_prova);
  return (
    <DivModality
      onClick={() => {
        const initialUrl = URL_AO_VIVO + '/evento/';
        let url = `${initialUrl}${nid_agrupa_evento}/prova/${
          event.nid_prova_evento
        }/classificatoria/${event.nid_prova_evento_classificatoria}/oficial/${
          !is_official ? '1' : '0'
        }`;

        if (token !== '') {
          url += `?tk=${token}`;
        }

        window.open(url, '_self');
      }}
      key={idx}
    >
      <RoundedModalityButton
        icon={Icon ? <Icon /> : <span />}
        text={'ranch'}
        variant={'tertiary'}
      />
      <DivModalityTexts>
        <NameProveTitle>{event.cds_tipo_prova}</NameProveTitle>
        <NameCategoryText>{event.cds_modalidade}</NameCategoryText>
      </DivModalityTexts>
    </DivModality>
  );
};

export { LivesList };

import {
  ContainerElement,
  DivTopTexts,
  HeadingContainer,
  HeadingModal,
  LocalText,
  ModalTopTextsContainer,
  StateText,
} from './styles';

import { LivesList } from './LivesList';
import { OrderEntryResults } from './OrderEntryResults';
import { useCallback, useEffect, useState } from 'react';
import { ListaAoVivo, ProvasEvento } from './types';

interface ElementListProps {
  lista_prova_ao_vivo: ListaAoVivo[];
  provas_lista_evento: ProvasEvento[];
  name_event: string;
  local_event: string;
  state_event: string;
  city_event: string;
  nid_agrupa_evento: number;
  nid_evento: number;
  is_official: boolean;
  type?: 'order_entry' | 'results' | '';
  token: string;
  URL_AO_VIVO: string;
  URL_RESULTADOS: string;
  URL_ORDEM_DE_ENTRADA: string;
}

const ElementList = ({
  city_event,
  lista_prova_ao_vivo,
  local_event,
  name_event,
  nid_agrupa_evento,
  nid_evento,
  state_event,
  is_official,
  provas_lista_evento,
  type = '',
  token,
  URL_AO_VIVO,
  URL_RESULTADOS,
  URL_ORDEM_DE_ENTRADA,
}: ElementListProps) => {
  const [nidProveOpened, setNidProveOpened] = useState<number | null>(null);
  const [listEventToShow, setListEventToShow] = useState<ProvasEvento[]>([]);

  const filterToShowResults = useCallback(() => {
    const finished = [
      'Finalizada',
      'Enviada Para o Juiz',
      'Reprovada Pelo Juiz',
      'Reprovada Pela ABQM',
      'Enviada Para a ABQM',
    ];

    // remove modalities that are not finished
    const provesToShow = provas_lista_evento.filter((prove) => {
      prove.modalidades = prove.modalidades.filter((modality) =>
        finished.includes(modality.cds_status_prova_evento)
      );
      return prove;
    });

    const provesToShowFiltered = provesToShow.filter(
      (prove) => prove.modalidades.length > 0
    );

    setListEventToShow(provesToShowFiltered);
  }, [provas_lista_evento]);

  const filterToShowOrderEntry = useCallback(() => {
    const finished = [
      'Finalizada',
      'Iniciada',
      'Pista Liberada',
      'Pista Liberada ABQM',
      'Enviada Para o Juiz',
      'Reprovada Pelo Juiz',
      'Reprovada Pela ABQM',
      'Enviada Para a ABQM',
    ];

    // remove modalities that are not finished
    const provesToShow = provas_lista_evento.filter((prove) => {
      prove.modalidades = prove.modalidades.filter(
        (modality) => !finished.includes(modality.cds_status_prova_evento)
      );
      return prove;
    });

    const provesToShowFiltered = provesToShow.filter(
      (prove) => prove.modalidades.length > 0
    );

    setListEventToShow(provesToShowFiltered);
  }, [provas_lista_evento]);

  useEffect(() => {
    if (type === 'results') {
      filterToShowResults();
    }
    if (type === 'order_entry') {
      filterToShowOrderEntry();
    }
  }, [type, filterToShowResults, filterToShowOrderEntry]);

  return (
    <ContainerElement>
      <DivTopTexts>
        <HeadingContainer>
          <HeadingModal>{name_event}</HeadingModal>
        </HeadingContainer>

        <ModalTopTextsContainer>
          <LocalText>{local_event}</LocalText>
          <StateText>
            {city_event}, {state_event}
          </StateText>
        </ModalTopTextsContainer>
      </DivTopTexts>

      {lista_prova_ao_vivo.map((event, idx) => (
        <LivesList
          key={idx}
          event={event}
          idx={idx}
          nid_agrupa_evento={nid_agrupa_evento}
          is_official={is_official}
          token={token}
          URL_AO_VIVO={URL_AO_VIVO}
        />
      ))}

      {listEventToShow.map((prove, idx) => (
        <OrderEntryResults
          key={idx}
          prove={prove}
          idx={idx}
          setNidProveOpened={setNidProveOpened}
          nidProveOpened={nidProveOpened}
          nidEvent={nid_evento}
          type={type}
          token={token}
          URL_RESULTADOS={URL_RESULTADOS}
          URL_ORDEM_DE_ENTRADA={URL_ORDEM_DE_ENTRADA}
        />
      ))}
    </ContainerElement>
  );
};

export { ElementList };

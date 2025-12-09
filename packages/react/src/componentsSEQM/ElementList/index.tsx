import {
  ContainerElement,
  ContainerOrderResult,
  DivTopTexts,
  HeadingContainer,
  HeadingModal,
  LocalText,
  MessageNoProves,
  ModalTopTextsContainer,
  StateText,
} from './styles';

import { LivesList } from './LivesList';
import { OrderEntryResults } from './OrderEntryResults';
import { useCallback, useEffect, useState } from 'react';
import { ListaAoVivo, ListaEvento } from './types';
import { Text } from '@components/Text';
import { colors } from '@abqm-ds/tokens';

interface ElementListProps {
  lista_prova_ao_vivo?: ListaAoVivo[];
  provas_lista_evento: ListaEvento[];
  name_event: string;
  local_event: string;
  state_event: string;
  city_event: string;
  nid_agrupa_evento: number;
  is_official?: boolean;
  type?: 'order_entry' | 'results' | 'lives' | '';
  token: string;
  URL_AO_VIVO?: string;
  URL_RESULTADOS: string;
  URL_ORDEM_DE_ENTRADA: string;
}

const ElementList = ({
  city_event,
  local_event,
  name_event,
  state_event,
  lista_prova_ao_vivo,
  provas_lista_evento,
  nid_agrupa_evento,
  is_official = false,
  type = '',
  token,
  URL_AO_VIVO,
  URL_RESULTADOS,
  URL_ORDEM_DE_ENTRADA,
}: ElementListProps) => {
  const [listEventToShow, setListEventToShow] = useState<ListaEvento[]>([]);

  const filterToShowResults = useCallback(() => {
    const finished = [
      'Finalizada',
      'Enviada Para o Juiz',
      'Reprovada Pelo Juiz',
      'Reprovada Pela ABQM',
      'Enviada Para a ABQM',
    ];

    // remove modalities that are not finished
    const eventsToShow = provas_lista_evento.map((event) => {
      return {
        ...event,
        provas: event.provas.map((prove) => {
          return {
            ...prove,
            modalidades: prove.modalidades.filter((modality) =>
              finished.includes(modality.cds_status_prova_evento)
            ),
          };
        }),
      };
    });

    const eventsToShowFiltered = eventsToShow.filter((event) =>
      event.provas.some((prove) => prove.modalidades.length > 0)
    );

    setListEventToShow(eventsToShowFiltered);
  }, [provas_lista_evento]);

  const filterToShowOrderEntry = useCallback(() => {
    const finishedOrderEntry = [
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
    const eventsToShow = provas_lista_evento.map((event) => {
      return {
        ...event,
        provas: event.provas.map((prove) => {
          return {
            ...prove,
            modalidades: prove.modalidades.filter(
              (modality) => !finishedOrderEntry.includes(modality.cds_status_prova_evento)
            ),
          };
        }),
      };
    });

    setListEventToShow(eventsToShow);
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

      {lista_prova_ao_vivo?.length === 0 && listEventToShow.length === 0 && (
        <>
          {type === 'lives' && (
            <MessageNoProves>
              No momento, nenhuma prova está em andamento.
            </MessageNoProves>
          )}
          {type === 'order_entry' && (
            <MessageNoProves>No momento, não há ordens de entrada.</MessageNoProves>
          )}
          {type === 'results' && (
            <MessageNoProves>No momento, não há resultados.</MessageNoProves>
          )}
        </>
      )}

      {lista_prova_ao_vivo?.map((event, idx) => (
        <LivesList
          key={idx}
          event={event}
          idx={idx}
          nid_agrupa_evento={nid_agrupa_evento}
          is_official={is_official}
          token={token}
          URL_AO_VIVO={URL_AO_VIVO || ''}
        />
      ))}

      {listEventToShow.map((event, idx) => (
        <ContainerOrderResult key={idx}>
          {listEventToShow.length > 1 && (
            <Text
              fontWeight="semiBold"
              color={colors.emeraldGreen75}
              fontFamily="secondary"
            >
              {event.cds_evento}
            </Text>
          )}

          {event.provas.map((prove) => (
            <OrderEntryResults
              key={idx}
              prove={prove}
              idx={idx}
              nidEvent={event.nid_evento}
              type={type === 'lives' ? '' : type}
              token={token}
              URL_RESULTADOS={URL_RESULTADOS}
              URL_ORDEM_DE_ENTRADA={URL_ORDEM_DE_ENTRADA}
            />
          ))}
        </ContainerOrderResult>
      ))}
    </ContainerElement>
  );
};

export { ElementList };

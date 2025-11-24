import {
  ContainerProves,
  ContainerTopProves,
  DivModality,
  DivModalityTexts,
  DivProve,
  NameProveText,
  NameProveTitle,
  WrapperTextIcon,
} from './styles';
import { CheckAllIcon, TrophyFillIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import React, { useCallback } from 'react';
import { Modalidades, ProvasEvento } from '../types';
import { getModalityIcon } from 'utils';
import { RoundedModalityButton } from '@componentsSEQM/RoundedModalityButton';

const OrderEntryResults = ({
  prove,
  idx,
  setNidProveOpened,
  nidProveOpened,
  nidEvent,
  type,
  token,
  URL_RESULTADOS,
  URL_ORDEM_DE_ENTRADA,
}: {
  prove: ProvasEvento;
  idx: number;
  setNidProveOpened: React.Dispatch<React.SetStateAction<number | null>>;
  nidProveOpened: number | null;
  nidEvent: number;
  type: 'order_entry' | 'results' | '';
  token: string;
  URL_RESULTADOS: string;
  URL_ORDEM_DE_ENTRADA: string;
}) => {
  const Icon = getModalityIcon(prove.nid_prova);

  const addTokenIfExists = useCallback(
    ({ url }: { url: string }) => {
      if (token !== '') {
        url += `?tk=${token}`;
      }
      return url;
    },
    [token]
  );

  const redirectOrderEntry = ({ modality }: { modality: Modalidades }) => {
    const initialUrl = URL_ORDEM_DE_ENTRADA + '/ordem-entrada/';
    const url = `${initialUrl}${modality.nid_prova_evento_classificatoria}/prova/${modality.nid_prova_evento}`;
    const urlWithToken = addTokenIfExists({ url });
    window.open(urlWithToken, '_self');
  };

  const redirectResults = ({ modality }: { modality: Modalidades }) => {
    const initialUrl = URL_RESULTADOS + '/modalidade/' + prove.nid_prova;
    const url = `${initialUrl}/evento/${nidEvent}/prova-evento/${modality.nid_prova_evento}/classificatoria/${modality.nid_prova_evento_classificatoria}`;
    const urlWithToken = addTokenIfExists({ url });
    window.open(urlWithToken, '_self');
  };

  const redirectResultsTop10 = ({ modality }: { modality: Modalidades }) => {
    const initialUrl = URL_RESULTADOS + '/modalidade/' + prove.nid_prova;
    const url = `${initialUrl}/evento/${nidEvent}/prova-evento/${modality.nid_prova_evento}/top10`;
    const urlWithToken = addTokenIfExists({ url });
    window.open(urlWithToken, '_self');
  };

  return (
    <DivModality key={idx}>
      <ContainerTopProves
        className="top-proves"
        onClick={() => {
          setNidProveOpened(prove.nid_prova === nidProveOpened ? null : prove.nid_prova);
        }}
      >
        <RoundedModalityButton
          icon={Icon ? <Icon /> : <span />}
          text={'ranch'}
          variant={'tertiary'}
        />
        <DivModalityTexts>
          <NameProveTitle>{prove.cds_tipo_prova}</NameProveTitle>
        </DivModalityTexts>
      </ContainerTopProves>

      {nidProveOpened === prove.nid_prova && prove.modalidades.length > 0 && (
        <ContainerProves>
          {type === 'results' && (
            <DivProve
              key={idx}
              onClick={() => redirectResultsTop10({ modality: prove.modalidades[0] })}
            >
              <WrapperTextIcon>
                <TrophyFillIcon width={12} fill={colors.yellow400} />
                <NameProveText>TOP 10</NameProveText>
              </WrapperTextIcon>
            </DivProve>
          )}

          {prove.modalidades.map((modality, mIdx) => (
            <DivProve
              key={mIdx}
              onClick={
                type === 'results'
                  ? () => redirectResults({ modality })
                  : () => redirectOrderEntry({ modality })
              }
            >
              <WrapperTextIcon>
                <CheckAllIcon width={12} />
                <NameProveText>{modality.cds_modalidade}</NameProveText>
              </WrapperTextIcon>
              <NameProveText>{modality.nnr_competidores}</NameProveText>
            </DivProve>
          ))}
        </ContainerProves>
      )}
    </DivModality>
  );
};

export { OrderEntryResults };

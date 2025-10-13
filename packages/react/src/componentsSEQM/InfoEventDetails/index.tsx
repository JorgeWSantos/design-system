import { ComponentProps, useState } from 'react';
import { EventSummaryDefaultIcon } from '@abqm-ds/icons';
import { ImageContainer, InfoEvent, InfoEventDetailed, Information } from './styles';
import { fontWeights } from '@abqm-ds/tokens';
import { InfoDetailsDataType } from './types';

export interface InfoDetailsProps extends ComponentProps<typeof InfoEvent> {
  data: InfoDetailsDataType | null;
}

const InfoEventDetails = ({ data }: { data: InfoDetailsDataType | null }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <InfoEvent>
      <ImageContainer>
        {data?.logotipo && !imgError ? (
          <img
            src={data.logotipo}
            alt="Logotipo do evento"
            // style={{ minHeight: '100%', minWidth: '100%' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <EventSummaryDefaultIcon style={{ minHeight: '100%', minWidth: '100%' }} />
        )}
      </ImageContainer>

      <InfoEventDetailed>
        <Information>
          <p className="title">organizador</p>
          <p
            className="subtitle organizer"
            style={{ marginLeft: '0.1rem', fontWeight: fontWeights.semiBold }}
          >
            {data?.organizador || '--'}
          </p>
        </Information>

        <Information>
          <p className="title">local</p>
          <p className="subtitle">{data?.local || '--'}</p>
        </Information>

        <Information>
          <p className="title">data</p>
          <p className="subtitle">
            {data?.data_inicio || '--'} - {data?.data_fim || '--'}
          </p>
        </Information>
      </InfoEventDetailed>
    </InfoEvent>
  );
};

InfoEventDetails.displayName = 'InfoEventDetails';

export { InfoEventDetails };

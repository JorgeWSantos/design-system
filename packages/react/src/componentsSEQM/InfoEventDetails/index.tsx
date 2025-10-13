import { ComponentProps, useEffect, useRef, useState } from 'react';
import { EventSummaryDefaultIcon } from '@abqm-ds/icons';
import { ImageContainer, InfoEvent, InfoEventDetailed, Information } from './styles';
import { fontWeights } from '@abqm-ds/tokens';
import { InfoDetailsDataType } from './types';

export interface InfoDetailsProps extends ComponentProps<typeof InfoEvent> {
  data: InfoDetailsDataType | null;
}

const InfoEventDetails = ({ data }: { data: InfoDetailsDataType | null }) => {
  const [imgError, setImgError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [wrapped, setWrapped] = useState(false);
  const [widthOfWrap, setWidthOfWrap] = useState(0);

  // valida se o flex wrap aconteceu em algum elemento
  useEffect(() => {
    const checkWrap = () => {
      const container = containerRef.current;
      if (!container) return;

      const children = Array.from(container.children);
      if (children.length < 2) return;

      // compara o top do primeiro e do último elemento
      const firstTop = (children[0] as HTMLElement).offsetTop;
      const lastTop = (children[children.length - 1] as HTMLElement).offsetTop;

      // se o último estiver mais abaixo, houve wrap
      if (lastTop > firstTop) {
        setWrapped(true);
        setWidthOfWrap((prev) => {
          if (prev !== 0) return prev;

          return window.innerWidth;
        });
      }

      if (widthOfWrap !== 0 && window.innerWidth > widthOfWrap) {
        setWrapped(false);
        setWidthOfWrap(0);
      }
    };

    setTimeout(() => {
      checkWrap();
    }, 1000);

    window.addEventListener('resize', checkWrap);
    return () => window.removeEventListener('resize', checkWrap);
  }, [widthOfWrap]);

  // console.log('wrapped', wrapped);
  // console.log('widthOfWrap', widthOfWrap);

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

      <InfoEventDetailed $wrapped={wrapped}>
        <Information $wrapped={wrapped} ref={containerRef}>
          <p className="title">organizador</p>
          <p
            className="subtitle organizer"
            style={{ marginLeft: '0.1rem', fontWeight: fontWeights.semiBold }}
          >
            {data?.organizador || '--'}
          </p>
        </Information>

        <Information $wrapped={wrapped}>
          <p className="title">local</p>
          <p className="subtitle">{data?.local || '--'}</p>
        </Information>

        <Information $wrapped={wrapped}>
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

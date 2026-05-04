import { ComponentProps, useState } from 'react';
import { LogoAbqmBorderedEmeraldIcon, LogoAbqmBorderedWhiteIcon } from '@abqm-ds/icons';
import { ImageContainer } from './styles';
import { LogoSEQMWithFallbackDataType } from './types';

export interface LogoSEQMWithFallbackProps extends ComponentProps<typeof ImageContainer> {
  data: LogoSEQMWithFallbackDataType | null;
  light?: boolean; // default false
}

const LogoSEQMWithFallback = ({ data, light }: LogoSEQMWithFallbackProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <ImageContainer $light={light}>
      {data?.logotipo && !imgError ? (
        <img
          src={data.logotipo}
          alt="Logotipo do evento"
          onError={() => setImgError(true)}
        />
      ) : (
        <>{light ? <LogoAbqmBorderedWhiteIcon /> : <LogoAbqmBorderedEmeraldIcon />}</>
      )}
    </ImageContainer>
  );
};

LogoSEQMWithFallback.displayName = 'LogoSEQMWithFallback';

export { LogoSEQMWithFallback };

export type { LogoSEQMWithFallbackDataType };

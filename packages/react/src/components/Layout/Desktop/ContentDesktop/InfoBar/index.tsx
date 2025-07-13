import { InfoBarWrapper, Registry } from './styles';

interface InfoBarProps {
  count?: number;
}

export const InforBar = ({ count }: InfoBarProps) => {
  return (
    <InfoBarWrapper>
      <Registry>
        {count}
        <span> registro(s) </span>
      </Registry>
    </InfoBarWrapper>
  );
};

InforBar.displayName = 'InforBar';

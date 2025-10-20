import { Card, TextSubtitleCard, TextTitleCard } from './styles';

interface CardTableSEQMProps {
  title: string;
  subtitle: string;
}

const CardTableSEQM = ({ title, subtitle }: CardTableSEQMProps) => {
  return (
    <Card>
      <TextTitleCard>{title}</TextTitleCard>
      <TextSubtitleCard>{subtitle}</TextSubtitleCard>
    </Card>
  );
};

export { CardTableSEQM };

export type { CardTableSEQMProps };

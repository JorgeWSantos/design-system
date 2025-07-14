import { ComponentProps, ElementType } from 'react';
import { InfoCardDiv } from './styles';
import { Text } from '@components/Text';

export interface InfoCardProps extends ComponentProps<typeof InfoCardDiv> {
  as?: ElementType;
  title?: string;
  subTitle?: string;
}

export const InfoCard = ({ title, subTitle, ...rest }: InfoCardProps) => {
  return (
    <InfoCardDiv {...rest}>
      {title && (
        <Text fontSize="ssm" fontWeight="semiBold">
          {title}
        </Text>
      )}
      {subTitle && <Text fontSize="xxs">{subTitle}</Text>}
    </InfoCardDiv>
  );
};

InfoCard.displayName = 'InfoCard';

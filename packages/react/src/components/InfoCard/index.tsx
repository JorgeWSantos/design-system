import { ComponentProps, ElementType } from 'react';
import { InfoCardDiv } from './styles';
import { Text } from '@components/Text';
import { colors } from '@abqm-ds/tokens';

export interface InfoCardProps extends ComponentProps<typeof InfoCardDiv> {
  as?: ElementType;
  title?: string;
  subTitle?: string;
}

export const InfoCard = ({ title, subTitle, ...rest }: InfoCardProps) => {
  return (
    <InfoCardDiv {...rest}>
      {title && (
        <Text
          fontSize="ssm"
          fontWeight="semiBold"
          color={colors.white85}
          lineHeight="short"
        >
          {title}
        </Text>
      )}
      {subTitle && (
        <Text fontSize="xxs" color={colors.white50} style={{ marginTop: '-0.3rem' }}>
          {subTitle}
        </Text>
      )}
    </InfoCardDiv>
  );
};

InfoCard.displayName = 'InfoCard';

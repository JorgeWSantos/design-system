import { ComponentProps, ElementType } from 'react';
import { Container } from './styles';
import { Text } from '../Text';
import { colors } from '@abqm-ds/tokens';

export interface InfoCardProps extends ComponentProps<typeof Container> {
  as?: ElementType;
  title?: string;
  subTitle?: string;
  reverse?: boolean;
}

export const InfoCard = ({ title, subTitle, reverse, ...rest }: InfoCardProps) => {
  return (
    <Container $reverse={reverse}>
      {reverse ? (
        <>
          <Text
            fontSize="xxs"
            color={colors.white50}
            fontWeight="regular"
            lineHeight="shorter"
          >
            {title}
          </Text>
          <Text
            fontSize="ssm"
            color={colors.white85}
            fontWeight="semiBold"
            lineHeight="tight"
            style={{ marginTop: '-2px' }}
          >
            {subTitle}
          </Text>
        </>
      ) : (
        <>
          <Text
            fontSize="ssm"
            color={colors.white85}
            fontWeight="semiBold"
            lineHeight="tight"
            style={{ marginBottom: '-3px' }}
          >
            {subTitle}
          </Text>
          <Text
            fontSize="xxs"
            color={colors.white50}
            fontWeight="regular"
            lineHeight="shorter"
            style={{ marginTop: '-2px' }}
          >
            {title}
          </Text>
        </>
      )}
    </Container>
  );
};

InfoCard.displayName = 'InfoCard';

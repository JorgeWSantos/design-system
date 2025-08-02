import { colors } from '@abqm-ds/tokens';
import { TooltipContent, TooltipContentRight } from './styles';
import { Text } from '@components/Text';
import type { SVGProps, JSX } from 'react';
import React from 'react';

const TooltipContentComponent = ({
  ImgAnimal,
}: {
  ImgAnimal?: string | React.FC<SVGProps<SVGSVGElement>> | ((props: any) => JSX.Element);
}) => (
  <TooltipContent>
    {typeof ImgAnimal === 'string' ? (
      <img className="tooltip-image" src={ImgAnimal} />
    ) : typeof ImgAnimal === 'function' ? (
      <ImgAnimal className="tooltip-svg" />
    ) : null}

    <TooltipContentRight>
      <Text fontSize="xxs" color={colors.emeraldGreen75}>
        Conquistas do animal
      </Text>
    </TooltipContentRight>
  </TooltipContent>
);

TooltipContentComponent.displayName = 'TooltipContentComponent';

export default TooltipContentComponent;

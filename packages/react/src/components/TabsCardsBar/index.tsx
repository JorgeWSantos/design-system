import React, { ComponentProps } from 'react';
import {
  Container,
  TabsWrapper,
  Tab,
  TabsBarLine,
  TabFirst,
  TabOther,
  ChildrenWrapper,
} from './styles';
import { Text } from '@components/Text';

interface TabsPropType {
  label: string;
  value: string;
}

interface TabsCardsBarProps extends ComponentProps<typeof Container> {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children?: React.ReactNode;
  tabs: Array<TabsPropType>;
}

const TabsCardsBar: React.FC<TabsCardsBarProps> = ({
  activeTab,
  onTabChange,
  children,
  tabs,
}) => {
  return (
    <Container>
      <TabsWrapper>
        {tabs.map((tab, i) => {
          if (i === 0) {
            return (
              <TabFirst
                key={i}
                $active={activeTab === tab.value}
                $secondIsNotSelected={activeTab !== tabs[1].value}
              >
                <Tab
                  active={activeTab === tab.value}
                  onClick={() => onTabChange(tab.value)}
                >
                  <Text fontSize="xxs">{tab.label}</Text>
                </Tab>
              </TabFirst>
            );
          }

          return (
            <TabOther
              $active={activeTab === tab.value}
              $isOtherSelected={activeTab !== tabs[0].value}
              $nextIsSelected={activeTab === tabs[i + 1]?.value}
              $isFirstSelected={activeTab === tabs[0].value}
            >
              <Tab
                active={activeTab === tab.value}
                onClick={() => onTabChange(tab.value)}
              >
                <Text fontSize="xxs">{tab.label}</Text>
              </Tab>
            </TabOther>
          );
        })}

        <TabsBarLine />

        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
      </TabsWrapper>
    </Container>
  );
};

TabsCardsBar.displayName = 'TabsCardsBar';

export { TabsCardsBar };
export type { TabsPropType };

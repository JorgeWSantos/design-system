import React, { ComponentProps } from 'react';
import {
  Container,
  TabsWrapper,
  Tab,
  TabsBarLine,
  TabFirst,
  TabOther,
  ChildrenWrapper,
  StyledTextTab,
} from './styles';

interface TabsPropType {
  label: string;
  value: string;
}

interface TabsCardsBarProps extends ComponentProps<typeof Container> {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children?: React.ReactNode;
  tabs: Array<TabsPropType>;
  hideAutoWidthElement?: boolean;
}

const TabsCardsBar: React.FC<TabsCardsBarProps> = ({
  activeTab,
  onTabChange,
  children,
  tabs,
  hideAutoWidthElement = false,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <TabsWrapper>
        {tabs.map((tab, i) => {
          const isActive = activeTab === tab.value;

          if (i === 0) {
            return (
              <TabFirst
                key={i}
                $active={isActive}
                $secondIsNotSelected={activeTab !== tabs[1]?.value}
              >
                <Tab active={isActive} onClick={() => onTabChange(tab.value)}>
                  <StyledTextTab active={isActive}>{tab.label}</StyledTextTab>
                </Tab>
              </TabFirst>
            );
          }

          return (
            <TabOther
              $active={isActive}
              $isOtherSelected={activeTab !== tabs[0].value}
              $nextIsSelected={activeTab === tabs[i + 1]?.value}
              $isFirstSelected={activeTab === tabs[0].value}
            >
              <Tab active={isActive} onClick={() => onTabChange(tab.value)}>
                <StyledTextTab active={isActive}>{tab.label}</StyledTextTab>
              </Tab>
            </TabOther>
          );
        })}

        {!hideAutoWidthElement && <TabsBarLine />}

        {children && (
          <ChildrenWrapper $extendThisDiv={hideAutoWidthElement}>
            {children}
          </ChildrenWrapper>
        )}
      </TabsWrapper>
    </Container>
  );
};

TabsCardsBar.displayName = 'TabsCardsBar';

export { TabsCardsBar };
export type { TabsPropType };

import style from "./Tabs.module.scss";

import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";

interface TabsProps {
  description: string;
}

export const Tabs: React.FC<TabsProps> = ({ description }) => {
  return (
    <TabsComponent selectedTabClassName={style.active}>
      <TabList className={style.list}>
        <Tab>Description</Tab>
      </TabList>

      <TabPanel>
        <div className={style.main}>{description}</div>
      </TabPanel>
    </TabsComponent>
  );
};

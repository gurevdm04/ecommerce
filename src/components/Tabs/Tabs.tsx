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
        <Tab>Additional Information</Tab>
        <Tab>Reviews [5]</Tab>
      </TabList>

      <TabPanel>
        <div className={style.main}>{description}</div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </TabsComponent>
  );
};

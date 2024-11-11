import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Tabs.module.scss";

import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";

export const Tabs = () => {
  return (
    <Wrapper>
      <TabsComponent selectedTabClassName={style.active}>
        <TabList className={style.list}>
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Reviews [5]</Tab>
        </TabList>

        <TabPanel>
          <div className={style.main}>
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </TabsComponent>
    </Wrapper>
  );
};

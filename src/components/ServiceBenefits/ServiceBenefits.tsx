import style from "./ServiceBenefits.module.scss";

import { GiTrophyCup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";

import { IconType } from "react-icons";

export const ServiceBenefits = () => {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <Item
          Icon={GiTrophyCup}
          title="High Quality"
          subtitle="crafted from top materials"
        />
        <Item
          Icon={AiOutlineFileProtect}
          title="Warranty Protection"
          subtitle="Over 2 years"
        />
        <Item
          Icon={MdOutlineLocalShipping}
          title="Free Shipping"
          subtitle="Order over 150 $"
        />
        <Item
          Icon={BiSupport}
          title="24 / 7 Support"
          subtitle="Dedicated support"
        />
      </div>
    </div>
  );
};

interface ItemProps {
  Icon: IconType;
  title: string;
  subtitle: string;
}

const Item: React.FC<ItemProps> = ({ Icon, subtitle, title }) => (
  <div className={style.item}>
    <div className={style.icon}>
      <Icon fontSize={50} color="#000" />
    </div>
    <div className={style.block}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  </div>
);

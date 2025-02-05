import style from "./ServiceBenefits.module.scss";

import { GiTrophyCup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";

import { IconType } from "react-icons";
import { Wrapper } from "../Wrapper/Wrapper";

export const ServiceBenefits = () => {
  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <Item
            Icon={GiTrophyCup}
            title="Высокое качество"
            subtitle="Высококачественные материалы"
          />
          <Item
            Icon={AiOutlineFileProtect}
            title="Гарантийная защита"
            subtitle="Более 2-х лет"
          />
          <Item
            Icon={MdOutlineLocalShipping}
            title="Бесплатная доставка"
            subtitle="На все товары"
          />
          <Item
            Icon={BiSupport}
            title="Поддержка 24/7"
            subtitle="Специальная поддержка"
          />
        </div>
      </Wrapper>
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

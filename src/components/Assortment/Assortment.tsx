import style from "./Assortment.module.scss";

import img from "./../../assets/images/assortment.jpg";
import img2 from "./../../assets/images/assortment2.png";
import img3 from "./../../assets/images/assortment3.png";
import { Wrapper } from "../Wrapper/Wrapper";

export const Assortment = () => {
  return (
    <Wrapper>
      <h2 className={style.title}>Browse The Range</h2>
      <p className={style.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={style.row}>
        <Item img={img} label="Dining" />
        <Item img={img2} label="Living" />
        <Item img={img3} label="Bedroom" />
      </div>
    </Wrapper>
  );
};

interface ItemProps {
  label: string;
  img: string;
}

const Item: React.FC<ItemProps> = ({ img, label }) => (
  <div className={style.item}>
    <img className={style.img} src={img} alt={label} />
    <p className={style.text}>{label}</p>
  </div>
);

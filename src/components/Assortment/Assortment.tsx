import style from "./Assortment.module.scss";

import img from "./../../assets/images/assortment.jpg";
import { Wrapper } from "../Wrapper/Wrapper";

export const Assortment = () => {
  return (
    <Wrapper>
      <h2 className={style.title}>Browse The Range</h2>
      <p className={style.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={style.row}>
        <Item />
        <Item />
        <Item />
      </div>
    </Wrapper>
  );
};

const Item = () => (
  <div className={style.item}>
    <img className={style.img} src={img} alt="" />
    <p className={style.text}>Dining</p>
  </div>
);

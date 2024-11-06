import style from "./Assortment.module.scss";

import img from "./../../assets/images/assortment.jpg";

export const Assortment = () => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>Browse The Range</h2>
      <p className={style.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={style.row}>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

const Item = () => (
  <div className={style.item}>
    <img className={style.img} src={img} alt="" />
    <p className={style.text}>Dining</p>
  </div>
);

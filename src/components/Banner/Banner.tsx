import { Button } from "../Button/Button";
import style from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={style.wrap}>
      <div className={style.block}>
        <h3 className={style.subtitle}>New Arrival</h3>
        <h2 className={style.title}>Discover Our New Collection</h2>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Button label="BUY Now" />
      </div>
    </div>
  );
};

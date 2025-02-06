import { Button } from "../Button/Button";
import style from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={style.wrap}>
      <div className={style.block}>
        <h3 className={style.subtitle}>Новое поступление</h3>
        <h2 className={style.title}>Откройте для себя нашу новую коллекцию</h2>
        <p className={style.text}>
          Lorem очень морковь, томатный бакалавриат разработчик. К фильму Земля,
          траур или недвижимость Ullamcorper.
        </p>
        <Button label="Купить сейчас" />
      </div>
    </div>
  );
};

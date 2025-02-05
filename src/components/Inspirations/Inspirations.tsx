import style from "./Inspirations.module.scss";
import { Button } from "../Button/Button";

import { Wrapper } from "../Wrapper/Wrapper";
import { Carousel } from "../Carousel/Carousel";

export const Inspirations = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.descr}>
          <h2 className={style.title}>Более 50 красивых комнат вдохновляют</h2>
          <p className={style.subtitle}>
            Наш дизайнер уже создал множество красивых прототипов комнат, которые
            вдохновят вас
          </p>
          <Button label="Узнать больше" />
        </div>
        <Carousel />
      </div>
    </Wrapper>
  );
};

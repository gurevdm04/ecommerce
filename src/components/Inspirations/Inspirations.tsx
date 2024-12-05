import style from "./Inspirations.module.scss";
import { Button } from "../Button/Button";

import { Wrapper } from "../Wrapper/Wrapper";
import { Carousel } from "../Carousel/Carousel";

export const Inspirations = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.descr}>
          <h2 className={style.title}>50+ Beautiful rooms inspiration</h2>
          <p className={style.subtitle}>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button label="Explore More" />
        </div>
        <Carousel />
      </div>
    </Wrapper>
  );
};

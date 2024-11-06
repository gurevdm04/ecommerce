import style from "./Inspirations.module.scss";
import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";

import roomImg from "./../../assets/images/room.jpg";
import sliderImg from "./../../assets/images/slider.jpg";

export const Inspirations = () => {
  return (
    <div className={style.wrap}>
      <div className={style.descr}>
        <h2 className={style.title}>50+ Beautiful rooms inspiration</h2>
        <p className={style.subtitle}>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Button label="Explore More" />
      </div>
      <div className={style.info}>
        <img src={roomImg} className={style.infoImg} alt="" />
        <div className={style.infoBox}>
          <p className={style.infosubtitle}>01 - Bed Room</p>
          <h3 className={style.infotitle}>Inner Peace</h3>
          {/* <button className={style.infobtn}>
            <FaArrowRight />
          </button> */}
          <Button className={style.infobtn}>
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className={style.slider}>
        <img className={style.slider} src={sliderImg} alt="" />
        <div className={style.sliderPag}>
          <span className={style.sliderPagItemActive}></span>
          <span className={style.sliderPagItem}></span>
          <span className={style.sliderPagItem}></span>
          <span className={style.sliderPagItem}></span>
        </div>
      </div>
    </div>
  );
};

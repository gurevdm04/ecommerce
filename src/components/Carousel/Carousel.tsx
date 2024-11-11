import style from "./Carousel.module.scss";
import "./slider.scss";
import roomImg from "./../../assets/images/room.jpg";
import sliderImg from "./../../assets/images/slider.jpg";
import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Controller } from "swiper/modules";
import { useState } from "react";
export const Carousel = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <>
      <div className={style.info}>
        <Swiper
          modules={[Controller]}
          onSwiper={setControlledSwiper}
          style={{ width: "400px", padding: "0 0 100px 0" }}
          spaceBetween={50}
          slidesPerView={1}
          allowSlideNext={false}
          allowSlidePrev={false}
        >
          <SwiperSlide>
            <img src={roomImg} className={style.infoImg} alt="" />
            <div className={style.infoBox}>
              <p className={style.infosubtitle}>01 - Bed Room</p>
              <h3 className={style.infotitle}>Inner Peace</h3>
              <Button className={style.infobtn}>
                <FaArrowRight />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={roomImg} className={style.infoImg} alt="" />
            <div className={style.infoBox}>
              <p className={style.infosubtitle}>02 - Kitchen Room</p>
              <h3 className={style.infotitle}>Inner Peace</h3>
              <Button className={style.infobtn}>
                <FaArrowRight />
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${style.slider} slider`}>
        <Swiper
          controller={{ control: controlledSwiper }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Controller]}
          className={style.slider}
        >
          <SwiperSlide>
            <img className={style.sliderImg} src={sliderImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={style.sliderImg} src={sliderImg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

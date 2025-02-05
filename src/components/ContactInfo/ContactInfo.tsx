import { FaLocationDot } from "react-icons/fa6";
import style from "./ContactInfo.module.scss";
import { FaPhone } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

export const ContactInfo = () => {
  return (
    <div className={style.info}>
      <div className={style.item}>
        <div className={style.icon}>
          <FaLocationDot />
        </div>
        <div>
          <h3>Адрес</h3>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.icon}>
          <FaPhone />
        </div>
        <div>
          <h3>Телефон</h3>
          <p>Мобильный: +(84) 546-6789 Горячая линия: +(84) 456-6789</p>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.icon}>
          <MdAccessTimeFilled />
        </div>
        <div>
          <h3>Рабочее время</h3>
          <p>
            Понедельник-пятница: 9:00 - 22:00 <br /> Суббота-воскресенье: 9:00 -
            21:00
          </p>
        </div>
      </div>
    </div>
  );
};

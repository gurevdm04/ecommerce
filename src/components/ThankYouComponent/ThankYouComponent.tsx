import { Link } from "react-router-dom";
import style from "./ThankYouComponent.module.scss";
import { ROUTES } from "../../constants/routes";
import decor1 from "./../../assets/images/decor1.png";
import decor2 from "./../../assets/images/decor2.png";
import decor3 from "./../../assets/images/decor3.png";
import decor4 from "./../../assets/images/decor4.png";

export const ThankYouComponent = () => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>Спасибо </h2>
      <h3 className={style.subtitle}>за покупками вместе с нами!</h3>
      <p className={style.text}>
        подробную информацию о заказе смотрите в{" "}
        <Link to={ROUTES.PROFILE}>профиле</Link>
      </p>
      <img className={style.decor1} src={decor1} alt="decor" />
      <img className={style.decor2} src={decor2} alt="decor" />
      <img className={style.decor3} src={decor3} alt="decor" />
      <img className={style.decor4} src={decor4} alt="decor" />
    </div>
  );
};

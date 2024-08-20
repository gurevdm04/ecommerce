import { HeaderButton } from "./HeaderButton/HeaderButton";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.wrap}>
      <div>
        <HeaderButton text={"Shop"} link={"#"} />
      </div>
      <div className={style.row}>
        <HeaderButton text={"Sign in"} link={"#"} />
        <HeaderButton text={"Cart"} link={"#"} />
      </div>
    </div>
  );
};

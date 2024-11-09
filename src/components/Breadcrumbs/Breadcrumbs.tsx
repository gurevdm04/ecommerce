import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <a href="#">Home</a>
          <span>{">"}</span>
          <a href="#">Shop</a>
          <span>{">"}</span>
          <p>|</p>
          <span>Asgaard sofa</span>
        </div>
      </Wrapper>
    </div>
  );
};

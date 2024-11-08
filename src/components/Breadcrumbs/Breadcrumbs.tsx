import style from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <a href="#">Home</a>
        <span>{">"}</span>
        <a href="#">Shop</a>
        <span>{">"}</span>
        <p>|</p>
        <span>Asgaard sofa</span>
      </div>
    </div>
  );
};

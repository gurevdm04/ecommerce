import style from "./BreadcrumbHeader.module.scss";
import img from "./../../assets/images/Breadcrumb.png";

export const BreadcrumbHeader = () => {
  return (
    <div className={style.wrap}>
      <img className={style.img} src={img} alt="" />
      <h2 className={style.title}>Shop</h2>
      <div className={style.breadcrumb}>
        <span className={style.root}>Shop</span>
        <span className={style.icon}>{">"}</span>
        <span className={style.page}>Shop</span>
      </div>
    </div>
  );
};

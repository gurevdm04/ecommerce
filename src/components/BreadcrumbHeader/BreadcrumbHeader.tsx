import style from "./BreadcrumbHeader.module.scss";
import img from "./../../assets/images/Breadcrumb.png";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";

export const BreadcrumbHeader = () => {
  const { pathname } = useLocation();

  const breadcrumbTitle = capitalizeFirstLetter(pathname.split("/")[1]);

  return (
    <div className={style.wrap}>
      <img className={style.img} src={img} alt="" />
      <h2 className={style.title}>{breadcrumbTitle}</h2>
      <div className={style.breadcrumb}>
        <span className={style.root}>Home</span>
        <span className={style.icon}>{">"}</span>
        <span className={style.page}>{breadcrumbTitle}</span>
      </div>
    </div>
  );
};

import { useLocation } from "react-router-dom";
import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Breadcrumbs.module.scss";
import { capitalizeFirstLetter, extractPathSegments } from "../../utils";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const [page] = extractPathSegments(pathname);

  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <a href="#">Главная</a>
          <span>{">"}</span>
          <a href="#">{capitalizeFirstLetter(page)}</a>
        </div>
      </Wrapper>
    </div>
  );
};

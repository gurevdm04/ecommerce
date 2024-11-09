import style from "./PhotoGrid.module.scss";
import img from "./../../assets/images/grid.png";
import { Wrapper } from "../Wrapper/Wrapper";

export const PhotoGrid = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <p className={style.subtitle}>Share your setup with</p>
        <h2 className={style.title}>#FuniroFurniture</h2>
        <img className={style.images} src={img} alt="" />
      </div>
    </Wrapper>
  );
};

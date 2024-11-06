import style from "./PhotoGrid.module.scss";
import img from "./../../assets/images/grid.png";

export const PhotoGrid = () => {
  return (
    <div className={style.wrap}>
      <p className={style.subtitle}>Share your setup with</p>
      <h2 className={style.title}>#FuniroFurniture</h2>
      <img className={style.images} src={img} alt="" />
    </div>
  );
};

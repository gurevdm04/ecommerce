import style from "./Product.module.scss";
import product from "./../../assets/images/product.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ProductCardProps } from "../../types";



export const Product: React.FC<ProductCardProps> = ({
  title,
  images,
  currentPrice,
  oldPrice,
  shortDesc,
  id,
}) => {
  console.log(images);

  return (
    <Link to={ROUTES.SHOP_ITEM(id)} className={style.wrap}>
      <img className={style.img} src={product} alt="" />
      <div className={style.block}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.subtitle}>{shortDesc}</p>
        <div className={style.price}>
          <p className={style.currentPrice}>Rp {currentPrice}</p>
          <p className={style.oldPrice}>Rp {oldPrice}</p>
        </div>
      </div>
    </Link>
  );
};

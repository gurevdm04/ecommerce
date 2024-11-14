import style from "./Product.module.scss";
import product from "./../../assets/images/product.png";
import { Button } from "../Button/Button";

import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export interface ProductProps {
  id: string;
  title: string;
  shortDesc: string;
  currentPrice: number;
  oldPrice: number;
  images: string[];
}

export const Product: React.FC<ProductProps> = ({
  title,
  images,
  currentPrice,
  oldPrice,
  shortDesc,
  id,
}) => {
  console.log(id);

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
      <div className={style.control}>
        <button className={style.btn}>Add to cart</button>
        <div className={style.options}>
          <button>
            <FaShareAlt fontSize={12} />
            <p>Share</p>
          </button>
          <button>
            <MdOutlineCompareArrows fontSize={20} />
            <p>Compare</p>
          </button>
          <button>
            <CiHeart fontSize={20} />
            <p>Like</p>
          </button>
        </div>
      </div>
    </Link>
  );
};

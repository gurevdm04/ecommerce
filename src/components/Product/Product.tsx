import style from "./Product.module.scss";
import product from "./../../assets/images/product.png";
import { Button } from "../Button/Button";

import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

export const Product = () => {
  return (
    <div className={style.wrap}>
      <img className={style.img} src={product} alt="" />
      <div className={style.block}>
        <h3 className={style.title}>Syltherine</h3>
        <p className={style.subtitle}>Stylish cafe chair</p>
        <div className={style.price}>
          <p className={style.currentPrice}>Rp 2.500.000</p>
          <p className={style.oldPrice}>Rp 3.500.000</p>
        </div>
      </div>
      <div className={style.control}>
        <button className={style.btn}>Add to cart</button>
        <div className={style.options}>
          <a href="#">
            <FaShareAlt fontSize={12} />
            <p>Share</p>
          </a>
          <a href="#">
            <MdOutlineCompareArrows fontSize={20} />
            <p>Compare</p>
          </a>
          <a href="#">
            <CiHeart fontSize={20} />
            <p>Like</p>
          </a>
        </div>
      </div>
    </div>
  );
};

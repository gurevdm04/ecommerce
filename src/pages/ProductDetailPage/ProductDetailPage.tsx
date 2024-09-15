import style from "./ProductDetailPage.module.scss";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import img from "../../../public/item.jpg";
import { Button } from "../../components/Button/Button";
import { Counter } from "../../components/Counter/Counter";

export const ProductDetailPage = () => {
  return (
    <div className={style.wrap}>
      <div className={style.images}>
        <img src={img} alt="" />
      </div>
      <div className={style.detail}>
        <h2 className={style.title}>
          Double Bed & Side Tables <MdFavoriteBorder />
        </h2>
        <div className={style.PriceAndRating}>
          <p className={style.price}>$54.98</p>
          <div className={style.verticalLine}></div>
          <div className={style.review}>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />( 32 review )
          </div>
        </div>
        <div className={style.gorizonalLine}></div>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum
          dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet,
          adipi scing elit Lorem ipsum dolor sit amet, consectetuer adipi scing
          elit Lorem ipsum dolor sit amet, consectetuer adipi
        </p>
        <div className={style.amount}>
          <div className={style.counter}>
            <Counter />
          </div>
          <div className={style.add}>
            <Button text={"Add to Cart"} />
          </div>
          <div className={style.buy}>
            <Button text={"Buy Now"} />
          </div>
        </div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

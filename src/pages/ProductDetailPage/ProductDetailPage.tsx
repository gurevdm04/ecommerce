import style from "./ProductDetailPage.module.scss";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export const ProductDetailPage = () => {
  return (
    <div className={style.wrap}>
      <div className={style.images}></div>
      <div className={style.detail}>
        <h2>
          Double Bed & Side Tables <MdFavoriteBorder />
        </h2>
        <div>
          <p>$54.98</p>
          <div>( 32 review )</div>
        </div>
        <div className={"line"}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum
          dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet,
          adipi scing elit Lorem ipsum dolor sit amet, consectetuer adipi scing
          elit Lorem ipsum dolor sit amet, consectetuer adipi
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

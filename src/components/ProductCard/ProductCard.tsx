import { GoPlusCircle } from "react-icons/go";
import mainStyle from "./ProductCard.module.scss";

export const ProductCard = () => {
  return (
    <a href="#">
      <div className={mainStyle.header}>
        <div className={mainStyle.discount}>-13%</div>
        <img
          className={mainStyle.img}
          src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
          alt=""
        />
      </div>
      <div className={mainStyle.footer}>
        <h2 className={mainStyle.title}>Double Bed & Side Tables</h2>
        <div className={mainStyle.row}>
          <div className={mainStyle.price}>
            <span className={mainStyle.oldPrice}>$230</span>{" "}
            <span className={mainStyle.currentPrice}>$200</span>
          </div>
          <div className={mainStyle.addToCart}>
            <GoPlusCircle />
          </div>
        </div>
      </div>
    </a>
  );
};

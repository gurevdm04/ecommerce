import { Button } from "../../components/Button/Button";
import { Counter } from "../../components/Counter/Counter";
import mainStyle from "./CartPage.module.scss";
import { IoClose } from "react-icons/io5";

export const CartPage = () => {
  return (
    <>
      <div className={mainStyle.grid}>
        <div className={mainStyle.product}>Product</div>
        <div className={mainStyle.price}>Price</div>
        <div className={mainStyle.quantity}>Quantity</div>
        <div className={mainStyle.total}>Total</div>
      </div>
      <div className={mainStyle.grid}>
        <div className={mainStyle.product}>
          <IoClose className={mainStyle.closeBtn} />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            alt=""
          />
          <p> Double Bed & Dressing Product</p>
        </div>
        <div className={mainStyle.price}>$100</div>
        <div className={mainStyle.quantity}>
          <Counter />
        </div>
        <div className={mainStyle.total}>$100</div>
      </div>
      <div className={mainStyle.grid}>
        <div className={mainStyle.product}>
          <IoClose className={mainStyle.closeBtn} />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            alt=""
          />
          <p> Double Bed & Dressing Product</p>
        </div>
        <div className={mainStyle.price}>$100</div>
        <div className={mainStyle.quantity}>
          <Counter />
        </div>
        <div className={mainStyle.total}>$100</div>
      </div>
      <div className={mainStyle.grid}>
        <div className={mainStyle.product}>
          <IoClose className={mainStyle.closeBtn} />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
            alt=""
          />
          <p> Double Bed & Dressing Product</p>
        </div>
        <div className={mainStyle.price}>$100</div>
        <div className={mainStyle.quantity}>
          <Counter />
        </div>
        <div className={mainStyle.total}>$100</div>
      </div>

      <div className={mainStyle.shipping}>
        <p>total: $300</p>
        <Button text="Continue to shipping" />
      </div>
    </>
  );
};

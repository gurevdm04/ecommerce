import { Link } from "react-router-dom";
import style from "./CartTotalPrice.module.scss";

export const CartTotalPrice = () => {
  return (
    <div className={style.results}>
      <h2 className={style.title}>Cart Totals</h2>
      <div className={style.subtotal}>
        <p>Subtotal</p>
        <span>Rs. 250,000.00</span>
      </div>
      <div className={style.total}>
        <p>Total</p>
        <span>Rs. 250,000.00</span>
      </div>
      <Link to="/checkout" className={style.btn}>
        Check Out
      </Link>
    </div>
  );
};

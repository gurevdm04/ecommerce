import { Link } from "react-router-dom";
import style from "./CartTotalPrice.module.scss";
import { ItemCartData } from "../../types";

interface CartTotalPriceProps {
  item: ItemCartData[];
}

export const CartTotalPrice: React.FC<CartTotalPriceProps> = ({ item }) => {
  let price = 0;

  item.forEach((item) => {
    console.log(item);
    if (item.currentPrice) {
      price += item.currentPrice * item.count;
    }
  });

  return (
    <div className={style.results}>
      <h2 className={style.title}>Cart Totals</h2>
      <div className={style.subtotal}>
        <p>Subtotal</p>
        <span>Rs. {price}</span>
      </div>
      <div className={style.total}>
        <p>Total</p>
        <span>Rs. {price}</span>
      </div>
      <Link to="/checkout" className={style.btn}>
        Check Out
      </Link>
    </div>
  );
};

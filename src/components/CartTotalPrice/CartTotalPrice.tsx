import { Link } from "react-router-dom";
import style from "./CartTotalPrice.module.scss";
import { ItemCartData } from "../../types";

interface CartTotalPriceProps {
  item: ItemCartData[];
}

export const CartTotalPrice: React.FC<CartTotalPriceProps> = ({ item }) => {
  let price = 0;

  item.forEach((item) => {
    if (item.currentPrice) {
      price += item.currentPrice * item.count;
    }
  });

  return (
    <div className={style.results}>
      <h2 className={style.title}>Содержимое корзины</h2>
      <div className={style.subtotal}>
        <p>Промежуточный итог</p>
        <span>Rs. {price}</span>
      </div>
      <div className={style.total}>
        <p>Итог</p>
        <span>Rs. {price}</span>
      </div>
      {item.length === 0 ? (
        <button className={style.btn} disabled>
          Проверить
        </button>
      ) : (
        <Link to="/checkout" className={style.btn}>
          Проверить
        </Link>
      )}
    </div>
  );
};

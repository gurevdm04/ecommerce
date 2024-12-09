import style from "./CartList.module.scss";
import { CartListItem } from "../CartListItem/CartListItem";
import { ItemCartData } from "../../types";

interface CartListProps {
  item: ItemCartData[];
  removeItem: (productId: string) => Promise<void>;
}

export const CartList: React.FC<CartListProps> = ({ item, removeItem }) => {
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      {item.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        item.map((data) => <CartListItem item={data} removeItem={removeItem} />)
      )}
      {}
    </div>
  );
};

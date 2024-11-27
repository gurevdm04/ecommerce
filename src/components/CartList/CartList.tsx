import style from "./CartList.module.scss";
import img from "./../../assets/images/product.png";
import { MdDelete } from "react-icons/md";
import { CartListItem } from "../CartListItem/CartListItem";

interface CartListProps {
  item: any[];
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

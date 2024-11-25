import style from "./CartList.module.scss";
import img from "./../../assets/images/product.png";
import { MdDelete } from "react-icons/md";
import { CartListItem } from "../CartListItem/CartListItem";

export const CartList = () => {
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <CartListItem />
      <CartListItem />
    </div>
  );
};

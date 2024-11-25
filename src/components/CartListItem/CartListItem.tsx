import style from "./CartListItem.module.scss";
import img from "./../../assets/images/product.png";
import { MdDelete } from "react-icons/md";

export const CartListItem = () => {
  return (
    <div className={style.items}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <div className={style.name}>Asgaard sofa</div>
      <div className={style.price}>Rs. 250,000.00</div>
      <div className={style.quantity}>1</div>
      <div className={style.subtotalPrice}>Rs. 250,000.00</div>
      <div className={style.delete}>
        <MdDelete color="#B88E2F" fontSize={40} />
      </div>
    </div>
  );
};

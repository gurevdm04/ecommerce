import style from "./CartListItem.module.scss";
import img from "./../../assets/images/product.png";
import { MdDelete } from "react-icons/md";

interface CartListItemProps {
  item: {
    image: string;
    title: string;
    price: number;
    productId: string;
  };
  removeItem: (productId: string) => Promise<void>;
}

export const CartListItem: React.FC<CartListItemProps> = ({
  item,
  removeItem,
}) => {
  return (
    <div className={style.items}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <div className={style.name}>{item.title}</div>
      <div className={style.price}>Rs. {item.price}</div>
      <div className={style.quantity}>1</div>
      <div className={style.subtotalPrice}>Rs. 250,000.00</div>
      <div className={style.delete}>
        <MdDelete
          onClick={() => removeItem(item.productId)}
          color="#B88E2F"
          fontSize={40}
        />
      </div>
    </div>
  );
};

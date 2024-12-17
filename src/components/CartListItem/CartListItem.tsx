import style from "./CartListItem.module.scss";
import { MdDelete } from "react-icons/md";
import { ItemCartData } from "../../types";

interface CartListItemProps {
  item: ItemCartData;
  removeItem: (productId: string) => Promise<void>;
}

export const CartListItem: React.FC<CartListItemProps> = ({
  item,
  removeItem,
}) => {
    return (
    <div className={style.items}>
      <div className={style.img}>
        <img src={item.images[0]} alt="" />
      </div>
      <div className={style.name}>{item.title}</div>
      <div className={style.price}>Rs. {item.currentPrice}</div>
      <div className={style.quantity}>{item.count}</div>

      {(item.size || item.color) && (
        <div className={style.additionally}>
          {item.size}
          <div
            className={style.color}
            style={{ backgroundColor: item.color }}
          ></div>
        </div>
      )}

      <div className={style.subtotalPrice}>
        Rs.
        {item.currentPrice ? item.currentPrice * item.count : "error"}
      </div>
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

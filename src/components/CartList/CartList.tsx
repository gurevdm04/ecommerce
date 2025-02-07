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
      <div className={style.wrap}>
        <div className={style.header}>
          <div>Продукт</div>
          <div>Цена</div>
          <div>Количество</div>
          <div>Промежуточный итог</div>
        </div>
        {item.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          item.map((data) => (
            <CartListItem
              key={data.title + data.size + data.color}
              item={data}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

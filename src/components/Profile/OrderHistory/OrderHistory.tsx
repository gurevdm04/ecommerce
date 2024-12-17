import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebaseConfig";
import { getUserOrders } from "../../../utils";
import { Loader } from "../Loader/Loader";
import { ItemCartData, Order } from "../../../types";
import style from "./OrderHistory.module.scss";

export const OrderHistory = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const userOrders = await getUserOrders(user.uid);
        setOrders(userOrders);
        setLoading(false);
      };

      fetchOrders();
    }
  }, [user]);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>История заказов</h2>
      {orders.length === 0 ? (
        <p>Вы еще не сделали ни одного заказа.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ marginBottom: "20px" }}>
            <hr />
            <p>
              <strong>Дата заказа:</strong>{" "}
              {new Date(order.orderDate.seconds * 1000).toLocaleString()}
              {" | "}
              <strong>Статус:</strong> {order.status}
              {" | "}
              <strong>Сумма заказа:</strong> {order.totalAmount} руб.
            </p>
            <h3>Товары:</h3>
            <ul className={style.list}>
              {order.items.map((item) => (
                <li
                  className={style.item}
                  key={item.productId + item.color + item.size}
                >
                  <img className={style.img} src={item.images[0]} alt="" />
                  {item.color && (
                    <div
                      className={style.color}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  )}
                  {item.size && <span>{item.size}</span>}
                  {item.title} - {item.count} шт. x {item.currentPrice} руб.
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

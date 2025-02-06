import { useEffect, useState } from "react";
import style from "./Orders.module.scss";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { Order } from "../../../types";
import { toastError } from "../../../toastify/Toastify";
import { Loader } from "../Loader/Loader";

export const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Получение заказов из Firestore
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersData: Order[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];
      setOrders(ordersData);
    } catch (error) {
      toastError("Ошибка при получении заказов");
      console.error("Ошибка при получении заказов:", error);
    }
    setLoading(false);
  };

  // Обновление статуса заказа
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: newStatus });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      toastError("Ошибка при обновлении статуса");
      console.error("Ошибка при обновлении статуса:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Список заказов</h1>
      <div>
        {orders.length === 0 ? (
          <p>Список заказов пуст.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={{ marginBottom: "20px" }}>
              <hr />
              <p>
                <strong>Дата заказа:</strong>{" "}
                {new Date(order.orderDate.seconds * 1000).toLocaleString()}
                {" | "}
                <strong>Номер заказа:</strong> {order.id}
                {" | "}
                <strong>Статус:</strong> {/* {order.status} */}
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                >
                  <option value="Ожидант отправки">Ожидант отправки</option>
                  <option value="В процессе">В процессе</option>
                  <option value="Доставленно">Доставленно</option>
                </select>
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
    </div>
  );
};

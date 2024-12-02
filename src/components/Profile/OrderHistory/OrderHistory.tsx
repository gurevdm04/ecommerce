import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebaseConfig";
import { getUserOrders } from "../../../utils";

interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  orderDate: any; // Timestamp
  status: string;
  items: OrderItem[];
  totalAmount: number;
}

export const OrderHistory = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const userOrders = await getUserOrders(user.uid);
        console.log(userOrders);

        setOrders(userOrders);
        setLoading(false);
      };

      fetchOrders();
    }
  }, [user]);

  if (loading) return <p>Загрузка истории заказов...</p>;

  return (
    <div>
      <h2>История заказов</h2>
      {orders.length === 0 ? (
        <p>Вы еще не сделали ни одного заказа.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} style={{ marginBottom: "20px" }}>
            <p>
              <strong>Дата заказа:</strong>{" "}
              {new Date(order.orderDate.seconds * 1000).toLocaleString()}
            </p>
            <p>
              <strong>Статус:</strong> {order.status}
            </p>
            <p>
              <strong>Сумма заказа:</strong> {order.totalAmount} руб.
            </p>
            <h3>Товары:</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.productId}>
                  {item.title} - {item.quantity} шт. x {item.price} руб.
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

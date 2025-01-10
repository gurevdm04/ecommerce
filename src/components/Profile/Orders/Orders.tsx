import style from "./Orders.module.scss";

const orders = [
  {
    id: "asd",
    status: "asd",
    totalAmount: "asd",
    orderDate: {
      seconds: 12,
    },
    items: [
      {
        productId: "123",
        color: "123",
        size: "123",
        images: ["https://via.placeholder.com/150"],
        title: "123",
        count: "123",
        currentPrice: "123",
      },
    ],
  },
  {
    id: "asd",
    status: "asd",
    totalAmount: "asd",
    orderDate: {
      seconds: 12,
    },
    items: [
      {
        productId: "123",
        color: "123",
        size: "123",
        images: ["https://via.placeholder.com/150"],
        title: "123",
        count: "123",
        currentPrice: "123",
      },
    ],
  },
];

export const Orders = () => {
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
              <strong>Статус:</strong> {/* {order.status} */}
              <select name="" id="">
                <option>123</option>
                <option>123</option>
                <option>123</option>
                <option>123</option>
                <option>123</option>
              </select>
              <button className={style.btn}>Сохрантить</button>
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

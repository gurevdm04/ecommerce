import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number;
}

export const createOrder = async (
  userId: string,
  items: OrderItem[],
  totalAmount: number
) => {
  const ordersRef = collection(db, "orders");

  try {
    await addDoc(ordersRef, {
      userId,
      orderDate: serverTimestamp(),
      status: "pending",
      items,
      totalAmount,
    });

    console.log("Заказ успешно создан!");
  } catch (error) {
    console.error("Ошибка создания заказа:", error);
  }
};

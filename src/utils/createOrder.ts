import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { CartUserData, ItemCartData } from "../types";

export const createOrder = async (
  userId: string,
  items: ItemCartData[],
  totalAmount: number,
  userData: CartUserData
) => {
  const ordersRef = collection(db, "orders");

  try {
    await addDoc(ordersRef, {
      userId,
      orderDate: serverTimestamp(),
      status: "pending",
      items,
      totalAmount,
      userData,
    });
    console.log("Заказ успешно создан!");
  } catch (error) {
    console.error("Ошибка создания заказа:", error);
  }
};

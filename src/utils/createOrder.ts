import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { CartUserData, ItemCartData } from "../types";
import { toastError, toastSuccess } from "../toastify/Toastify";

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
    toastSuccess("Заказ успешно создан!");
  } catch (error) {
    toastError("Ошибка создания заказа:");
    console.error("Ошибка создания заказа:", error);
  }
};

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { CartUserData, ItemCartData } from "../types";
import { toastError, toastSuccess } from "../toastify/Toastify";
import { ROUTES } from "../constants/routes";

export const createOrder = async (
  userId: string,
  items: ItemCartData[],
  totalAmount: number,
  userData: CartUserData,
  navigate: (path: string) => void
) => {
  const ordersRef = collection(db, "orders");
  try {
    await addDoc(ordersRef, {
      userId,
      orderDate: serverTimestamp(),
      status: "В процессе",
      items,
      totalAmount,
      userData,
    });
    toastSuccess("Заказ успешно создан!");
    navigate(ROUTES.THANKYOU);
  } catch (error) {
    toastError("Ошибка создания заказа:");
    console.error("Ошибка создания заказа:", error);
  }
};

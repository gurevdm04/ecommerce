import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ItemCartData } from "../types";
import { toastError } from "../toastify/Toastify";

interface Order {
  id: string;
  orderDate: any; // Timestamp
  status: string;
  items: ItemCartData[];
  totalAmount: number;
}

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const ordersRef = collection(db, "orders");
  const userOrdersQuery = query(
    ordersRef,
    where("userId", "==", userId),
    orderBy("orderDate", "desc")
  );

  try {
    const querySnapshot = await getDocs(userOrdersQuery);
    //todo заменить any
    const orders = querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return orders;
  } catch (error) {
    toastError("Ошибка получения заказов")
    console.error("Ошибка получения заказов:", error);
    return [];
  }
};

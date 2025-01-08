import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ItemCartData } from "../types";

export const addToCart = async (userId: string, product: ItemCartData) => {
  const cartRef = doc(db, "carts", userId);

  try {
    const cartSnap = await getDoc(cartRef);
    if (cartSnap.exists()) {
      await updateDoc(cartRef, {
        items: arrayUnion({ ...product }),
      });
    } else {
      // Если корзины для пользователя еще нет, создаем её
      await setDoc(cartRef, {
        userId,
        items: [{ ...product }],
      });
    }
    alert("Товар добавлен в корзину");
  } catch (error) {
    alert("Ошибка добавления товара в корзину:");
    console.error("Ошибка добавления товара в корзину:", error);
  }
};

import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ItemCartData } from "../types";

export const addToCart = async (userId: string, product: ItemCartData) => {
  const cartRef = doc(db, "carts", userId);

  try {
    const cartSnap = await getDoc(cartRef);
    if (cartSnap.exists()) {
      const cartData = cartSnap.data();
      const existingItem = cartData.items.find(
        (item: any) => item.productId === product.productId
      );

      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        const updatedItems = cartData.items.map((item: any) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        await updateDoc(cartRef, { items: updatedItems });
      } else {
        // Если товара нет в корзине, добавляем новый
        await updateDoc(cartRef, {
          items: arrayUnion({ ...product, quantity: 1 }),
        });
      }
    } else {
      // Если корзины для пользователя еще нет, создаем её
      await setDoc(cartRef, {
        userId,
        items: [{ ...product, quantity: 1 }],
      });
    }
  } catch (error) {
    console.error("Ошибка добавления товара в корзину:", error);
  }
};

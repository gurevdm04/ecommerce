import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toastError } from "../toastify/Toastify";

interface Favorites {
  id: string;
  title: string;
  images: string[];
  currentPrice: number;
  oldPrice: number;
}

export const addToFavorites = async (userId: string, product: Favorites) => {
  const favRef = doc(db, "favorites", userId);

  try {
    const favSnap = await getDoc(favRef);

    if (favSnap.exists()) {
      const favData = favSnap.data();
      const existingItem = favData.favorites.find(
        (item: any) => item.productId === product.id
      );

      if (!existingItem) {
        await updateDoc(favRef, {
          favorites: arrayUnion(product),
        });
      } else {
      }
    } else {
      await setDoc(favRef, {
        userId,
        favorites: [product],
      });
    }
  } catch (error) {
    toastError("Ошибка добавления в избранное")
    console.error("Ошибка добавления в избранное:", error);
  }
};

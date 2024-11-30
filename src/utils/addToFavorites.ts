import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const addToFavorites = async (
  userId: string,
  product: { id: string; title: string; image: string; price: number }
) => {
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
    console.error("Ошибка добавления в избранное:", error);
  }
};

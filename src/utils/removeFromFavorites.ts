import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const removeFromFavorites = async (userId: string, productId: string) => {
  const favRef = doc(db, "favorites", userId);

  try {
    const favSnap = await getDoc(favRef);

    if (favSnap.exists()) {
      const favData = favSnap.data();
      const updatedFavorites = favData.favorites.filter(
        (item: any) => item.productId !== productId
      );

      await updateDoc(favRef, { favorites: updatedFavorites });
    }
  } catch (error) {
    console.error("Ошибка удаления из избранного:", error);
  }
};

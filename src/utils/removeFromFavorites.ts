import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toastError } from "../toastify/Toastify";

export const removeFromFavorites = async (userId: string, productId: string) => {
  const favRef = doc(db, "favorites", userId);

  try {
    const favSnap = await getDoc(favRef);

    if (favSnap.exists()) {
      const favData = favSnap.data();
      const updatedFavorites = favData.favorites.filter(
        (item: any) => item.id !== productId
      );

      await updateDoc(favRef, { favorites: updatedFavorites });
    }
  } catch (error) {
    toastError("Ошибка удаления из избранного");
    console.error("Ошибка удаления из избранного:", error);
  }
};

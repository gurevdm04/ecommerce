import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toastError, toastWarning } from "../toastify/Toastify";

/**
 * Функция для получения категорий из Firestore.
 * @returns {Promise<string[]>} Массив категорий.
 */
export const fetchCategories = async (): Promise<string[]> => {
  const docId = "categoriesDoc"; // Уникальный идентификатор документа
  const docRef = doc(db, "categories", docId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.categories || [];
    } else {
      toastWarning("Документ с категориями не найден");
      console.warn("Документ с категориями не найден.");
      return [];
    }
  } catch (err) {
    toastError("Ошибка при получении категорий");
    console.error("Ошибка при получении категорий:", err);
    throw new Error("Не удалось загрузить категории.");
  }
};

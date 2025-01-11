import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toastError, toastWarning } from "../toastify/Toastify";

/**
 * Получает категории из Firestore и форматирует их.
 * @returns {Promise<{value: string, label: string}[]>} Форматированный массив категорий.
 */
export const fetchCategoryOptions = async (): Promise<
  { value: string; label: string }[]
> => {
  const docId = "categoriesDoc"; // Уникальный идентификатор документа
  const docRef = doc(db, "categories", docId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const categories = data.categories || [];

      // Форматируем категории в нужный формат
      const formattedCategories = categories.map((category: string) => ({
        value: category,
        label: category,
      }));

      // Добавляем опцию "По умолчанию" в начало списка
      return [{ value: "", label: "По умолчанию" }, ...formattedCategories];
    } else {
      toastWarning("Документ с категориями не найден");
      console.warn("Документ с категориями не найден.");
      return [{ value: "", label: "По умолчанию" }];
    }
  } catch (err) {
    toastError("Ошибка при получении категорий");
    console.error("Ошибка при получении категорий:", err);
    throw new Error("Не удалось загрузить категории.");
  }
};

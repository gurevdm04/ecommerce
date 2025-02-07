import { useEffect, useState } from "react";
import { MultiItemInput } from "../../AddProduct/MultiItemInput/MultiItemInput";
import style from "./AddCategory.module.scss";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { Loader } from "../Loader/Loader";
import { HandleType, Types } from "../../../types";
import { toastError, toastInfo, toastSuccess } from "../../../toastify/Toastify";

export const AddCategory = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ID документа, где будут храниться категории
  const docId = "categoriesDoc"; // Уникальный идентификатор документа

  // Функция загрузки данных из Firestore
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "categories", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCategory(data.categories || []);
      } else {
        toastInfo("Документ не найден, создайте его.");
        setCategory([]);
      }
    } catch (err) {
      setError("Не удалось загрузить категории.");
      toastError("Не удалось загрузить категории.");
      console.error(err);
    } finally {
      setLoading(false);
      setIsLoaded(true);
    }
  };

  // Загрузка данных при первом рендере
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange: HandleType = (_, e) => {
    const { value } = "target" in e ? e.target : e;
    setCategory([...value]);
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);

    try {
      const docRef = doc(db, "categories", docId);
      await setDoc(docRef, {
        categories: category,
        updatedAt: new Date(),
      });
      toastSuccess("Категории успешно обновлены.");
    } catch (err) {
      setError("Не удалось сохранить категории.");
      toastError("Не удалось сохранить категории.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded) return <Loader />;

  return (
    <div className={style.wrap}>
      <h2>Ваши категории</h2>
      <MultiItemInput
        handle={handleChange}
        name="category"
        placeholder=""
        title="Категории"
        type="text"
        value={category}
      />
      <button className={style.btn} onClick={handleSave} disabled={loading}>
        {loading ? "Сохранение..." : "Сохранить категории"}
      </button>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

import { useEffect, useState } from "react";
import { fetchCategoryOptions } from "../../../utils";
import { InputProps } from "../AddProduct";
import style from "./CategorySelector.module.scss";

export const CategorySelector: React.FC<InputProps> = ({
  handle,
  name,
  title,
  type,
}) => {
  const [categoryOptions, setCategoryOptions] = useState<
    { value: string; label: string }[]
  >([{ value: "Загрузка...", label: "Загрузка..." }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategoryOptions = async () => {
      try {
        const options = await fetchCategoryOptions();
        setCategoryOptions(options);
      } catch (err) {
        setError("Не удалось загрузить категории.");
      } finally {
        setLoading(false);
      }
    };

    loadCategoryOptions();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handle(type, e);
  };

  return (
    <div>
      <p>{title}</p>
      {error && <p>{error}</p>}
      <select className={style.select} onChange={handleSelectChange} name={name}>
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

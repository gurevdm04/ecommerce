import style from "./ProductFilterBar.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategoryOptions } from "../../utils";

export const ProductFilterBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    priceMax: "",
    priceMin: "",
    sort: searchParams.get("sort") || "default",
    category: searchParams.get("category") || "",
  });
  const [debouncedFilters, setDebouncedFilters] = useState({
    priceMax: "",
    priceMin: "",
  });

  // Обновление URL-параметров
  const updateSearchParams = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    const newSearchParams = new URLSearchParams();
    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value) newSearchParams.set(key, value);
    });

    navigate(`?${newSearchParams.toString()}`);
  };

  // Дебаунс для priceMin и priceMax
  useEffect(() => {
    const debounce = setTimeout(() => {
      updateSearchParams(debouncedFilters);
    }, 500);

    return () => clearTimeout(debounce);
  }, [debouncedFilters]);

  const handleInputChange =
    (key: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value;

      if (key === "priceMin" || key === "priceMax") {
        setDebouncedFilters((prev) => ({ ...prev, [key]: value }));
      } else {
        updateSearchParams({ [key]: value });
      }
    };

  const sortOptions = [
    { value: "default", label: "По умолчанию" },
    { value: "alphabetical_asc", label: "По алфавиту (А-Я)" },
    { value: "alphabetical_desc", label: "По алфавиту (Я-А)" },
    { value: "price_asc", label: "Сначала дешевле" },
    { value: "price_desc", label: "Сначала дороже" },
  ];

  const [categoryOptions, setCategoryOptions] = useState<
    { value: string; label: string }[]
  >([{ value: "Загрузка...", label: "Загрузка..." }]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategoryOptions = async () => {
      try {
        const options = await fetchCategoryOptions();
        setCategoryOptions(options);
      } catch (err) {
        setError("Не удалось загрузить категории.");
      }
    };

    loadCategoryOptions();
  }, []);

  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.setting}>| Showing 1–16 of 32 results</div>
          <div className={style.filter}>
            <p>Category</p>
            {error && <p>{error}</p>}
            <select
              name="category"
              value={filters.category}
              onChange={handleInputChange("category")}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={style.filter}>
            <p>Price Min</p>
            <input
              value={debouncedFilters.priceMin}
              onChange={handleInputChange("priceMin")}
              type="number"
            />
          </div>
          <div className={style.filter}>
            <p>Price Max</p>
            <input
              value={debouncedFilters.priceMax}
              onChange={handleInputChange("priceMax")}
              type="number"
            />
          </div>
          <div className={style.filter}>
            <p>Sort by</p>
            <select
              name="sortby"
              value={filters.sort}
              onChange={handleInputChange("sort")}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

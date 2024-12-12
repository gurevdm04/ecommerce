import style from "./ProductFilterBar.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

// TODO оптимизировать код
// TODO сделать так чтоб параметры удалялист при пустых значениях

export const ProductFilterBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [priceMax, setPriceMax] = useState<string>("");
  const [priceMin, setPriceMin] = useState<string>("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      updateSearchParams("priceMax", priceMax);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [priceMax]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      updateSearchParams("priceMin", priceMin);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [priceMin]);

  const updateSearchParams = (paramName: string, paramValue: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(paramName, paramValue);
    navigate(`?${newSearchParams.toString()}`);
  };

  const sortOptions = [
    { value: "default", label: "По умолчанию" },
    { value: "alphabetical_asc", label: "alphabetical_asc" },
    { value: "alphabetical_desc", label: "alphabetical_desc" },
    { value: "price_asc", label: "price_asc" },
    { value: "price_desc", label: "price_desc" },
  ];

  const currentSort = searchParams.get("sort") || "default";
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;
    updateSearchParams("sort", selectedSort);
  };

  const categoryOptions = [
    { value: "", label: "По умолчанию" },
    { value: "Sofas", label: "Sofas" },
  ];

  const currentCategory = searchParams.get("category") || "";
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    updateSearchParams("category", selectedCategory);
  };

  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.setting}>| Showing 1–16 of 32 results</div>
          <div className={style.filter}>
            <p>Category</p>
            <select
              name="category"
              value={currentCategory}
              onChange={handleCategoryChange}
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
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              type="number"
            />
          </div>
          <div className={style.filter}>
            <p>Price Max</p>
            <input
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              type="number"
            />
          </div>
          <div className={style.filter}>
            <p>Sort by</p>
            <select
              name="sortby"
              value={currentSort}
              onChange={handleSortChange}
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

import style from "./ProductFilterBar.module.scss";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Wrapper } from "../Wrapper/Wrapper";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type SortOption = "default" | "cheap" | "expensive";

export const ProductFilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get("sort") || "default";
  const [selectedOption, setSelectedOption] = useState<any>(
    sortOption || "default"
  );
  // Получение текущего значения сортировки

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as SortOption);
    const value = event.target.value;
    setSearchParams({ sort: value });
  };

  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.setting}>| Showing 1–16 of 32 results</div>
          <div className={style.filter}>
            <p>Short by</p>
            <select
              name="shortby"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="default">По умолчанию</option>
              <option value="cheap">Сначала недорогие</option>
              <option value="expensive">Сначала дорогие</option>
            </select>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

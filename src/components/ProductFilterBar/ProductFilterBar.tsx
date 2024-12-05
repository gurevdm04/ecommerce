import style from "./ProductFilterBar.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ProductFilterBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const sortOptions = [
    { value: "default", label: "По умолчанию" },
    { value: "price-asc", label: "Сначала недорогие" },
    { value: "price-desc", label: "Сначала дорогие" },
  ];

  const currentSort = searchParams.get("sort") || "default";

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort", selectedSort);

    navigate(`?${newSearchParams.toString()}`);
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

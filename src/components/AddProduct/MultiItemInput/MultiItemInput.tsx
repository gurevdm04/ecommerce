import style from "./MultiItemInput.module.scss";
import React, { useState } from "react";
import { InputProps } from "../AddProduct";
import { truncateText } from "../../../utils/truncateText";

export const MultiItemInput: React.FC<InputProps> = ({
  handle,
  name,
  placeholder,
  title,
  type,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputValue.trim() && typeof value === "object") {
      setInputValue("");
      handle(type, { name, value: [...value, inputValue] });
    }
  };

  const handleRemoveItem = (index: number) => {
    if (typeof value === "object") {
      handle(type, { name, value: value.filter((_, i) => i !== index) });
    } else {
      alert("error");
    }
  };

  return (
    <label className={style.wrap}>
      <p>{title}</p>
      <div className={style.header}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
        <button className={style.btn} onClick={handleAddItem}>
          Добавить
        </button>
      </div>
      <ul className={style.list}>
        {typeof value === "object" &&
          value.map((item, index) => (
            <li
              title={item}
              className={style.item}
              key={index}
            >
              {truncateText(item, 20)}{" "}
              <p
                className={style.remove}
                onClick={() => handleRemoveItem(index)}
              >
                x
              </p>
            </li>
          ))}
      </ul>
    </label>
  );
};

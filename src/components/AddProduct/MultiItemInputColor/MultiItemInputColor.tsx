import style from "./MultiItemInputColor.module.scss";
import React, { useState } from "react";
import { InputProps } from "../AddProduct";
import { truncateText } from "../../../utils/truncateText";
import { toastError } from "../../../toastify/Toastify";

const isValidColor = (color: string): boolean => {
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  const s = new Option().style;
  s.color = color;
  return s.color !== "" && (!color.startsWith("#") || hexRegex.test(color));
};

export const MultiItemInputColor: React.FC<InputProps> = ({
  handle,
  name,
  placeholder,
  title,
  type,
  value,
}) => {
  const [color, setColor] = useState<string>("#000000"); // Инициализируем с черным цветом

  const [inputValue, setInputValue] = useState("");
  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputValue.trim() && typeof value === "object") {
      if (!isValidColor(inputValue)) {
        toastError("Некорректный цвет");
        return;
      }
      setInputValue("");
      handle(type, { name, value: [...value, inputValue] });
    }
  };
  const handleAddItemColor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (color.trim() && typeof value === "object") {
      setInputValue("");
      handle(type, { name, value: [...value, color] });
    }
  };

  const handleRemoveItem = (index: number) => {
    if (typeof value === "object") {
      handle(type, { name, value: value.filter((_, i) => i !== index) });
    } else {
      toastError("error");
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value); // Обновляем состояние с выбранным цветом
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
      <div className={style.header}>
        <input
          className={style.inputColor}
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <p className={style.text}>Цвет: {color}</p>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: color,
          }}
        ></div>
        <button className={style.btn} onClick={handleAddItemColor}>
          Добавить
        </button>
      </div>
      <ul className={style.list}>
        {typeof value === "object" &&
          value.map((item, index) => (
            <li title={item} className={style.item} key={index}>
              <span
                className={style.color}
                style={{ backgroundColor: item }}
              ></span>
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

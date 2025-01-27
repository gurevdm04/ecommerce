import style from "./MultiItemInputUpload.module.scss";
import React, { useState } from "react";
import { InputProps } from "../AddProduct";
import { truncateText } from "../../../utils/truncateText";
import { toastError, toastSuccess } from "../../../toastify/Toastify";
import axios from "axios";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

export const MultiItemInputUpload: React.FC<InputProps> = ({
  handle,
  name,
  placeholder,
  title,
  type,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const imageRegex =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w.-]*)*\.(jpg|jpeg|png|gif|bmp|webp)$/i;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(imageRegex.test(value));
    }
  };

  const handleImageUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    if (!image) return;
    clearInput();
    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios
        .post("https://api.imgbb.com/1/upload", formData, {
          params: {
            key: import.meta.env.VITE_IMGBB_API_KEY,
          },
        })
        .then((response) => {
          setImageUrl(response.data.data.url);
          toastSuccess("Изображение загружено");
          if (typeof value === "object") {
            console.log(imageUrl);
            handle(type, { name, value: [...value, response.data.data.url] });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      toastError("Ошибка загрузки изображения");
      console.error("Ошибка загрузки изображения:", error);
    }
  };
  const clearInput = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) {
      e.preventDefault();
    }
    setImage(null); // Очистка состояния
    setImageUrl(""); // Сброс ссылки на изображение
  };

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isValid) {
      toastError("Введите корректный адрес изображения");
      return;
    }
    if (inputValue.trim() && typeof value === "object") {
      setInputValue("");
      handle(type, { name, value: [...value, inputValue] });
    }
  };

  const handleRemoveItem = (index: number) => {
    if (typeof value === "object") {
      handle(type, { name, value: value.filter((_, i) => i !== index) });
    } else {
      toastError("error");
    }
  };

  return (
    <label className={style.wrap}>
      {loading && (
        <div className={style.loadWrap}>
          <LoadingSpinner />
        </div>
      )}
      <p>{title}</p>
      <div className={style.header}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <button
          className={style.btn}
          onClick={handleAddItem}
          disabled={inputValue === ""}
        >
          Добавить upload
        </button>
        {!isValid && <p className={style.error}>Некорректный URL изображения</p>}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          key={imageUrl}
        />
        {imageUrl && (
          <>
            <div style={{ width: "100%" }}>
              <p style={{ margin: 0 }}>Предпросмотр изображения:</p>
              <img
                src={imageUrl}
                alt="Uploaded"
                style={{
                  maxWidth: "300px",
                  maxHeight: "500px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            </div>
          </>
        )}
        <button className={style.btn} onClick={(e) => handleImageUpload(e)}>
          Загрузить изображение
        </button>
        {
          <button className={style.btn} onClick={(e) => clearInput(e)}>
            Очистка
          </button>
        }
      </div>
      <ul className={style.list}>
        {typeof value === "object" &&
          value.map((item, index) => (
            <li title={item} className={style.item} key={index}>
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

import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { isAdmin, validateRequiredFields } from "../../utils";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

import style from "./AddProduct.module.scss";
import { Wrapper } from "../Wrapper/Wrapper";
import { Product } from "../../types";
import { Input } from "./Input/Input";
import { Loader } from "../Profile/Loader/Loader";

type Types = "text" | "number" | "textarea" | "multi" | "spec";
type HandleType = (
  type: Types,
  e:
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | { name: string; value: string[] }
) => void;

export interface InputProps {
  type: Types;
  title: string;
  value: string | number | string[];
  handle: HandleType;
  name: string;
  placeholder: string;
}

export const AddProductForm = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product>({
    title: "",
    oldPrice: null,
    currentPrice: null,
    description: "",
    shortDesc: "",
    images: [],
    size: [],
    color: [],
    specs: {
      category: "",
      sku: "",
      tags: "",
    },
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [showErrors, setShowErrors] = useState(false);

  const requiredChecks: boolean =
    data.title.trim() === "" ||
    data.currentPrice === null ||
    data.title.trim() === "" ||
    data.shortDesc.trim() === "" ||
    data.images.length === 0 ||
    data.specs.sku.trim() === "";

  const handleChange: HandleType = (type, e) => {
    const { name, value } = "target" in e ? e.target : e;

    switch (type) {
      case "text":
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "number":
        setData((prevData) => ({
          ...prevData,
          [name]: value === "0" || value === "" ? null : +value,
        }));
        break;
      case "textarea":
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "multi":
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
      case "spec":
        setData((prevData) => ({
          ...prevData,
          specs: {
            ...prevData.specs,
            [name]: value,
          },
        }));
        break;
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      isAdmin(user.uid).then((data) => {
        setIsAdminUser(data);
        setLoading(false);
      });
    }
  }, [user]);

  useEffect(() => {
    if (showErrors) {
      const errors = validateRequiredFields(data);
      setErrors(errors);
    }
  }, [data, showErrors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (requiredChecks) {
      const errors = validateRequiredFields(data);

      setErrors(errors);
      setShowErrors(true);
      alert("Заполните все обязательные поля!");
      return;
    }

    if (isAdminUser) {
      try {
        await addDoc(collection(db, "products"), {
          ...data,
          createdAt: serverTimestamp(),
        });
        alert("Product added!");
      } catch (error) {
        alert("Error adding product");
      }
    } else {
      alert("You are not authorized to add products");
    }
  };

  if (loading) return <Loader />;
  if (!isAdminUser) {
    return <div>You are not authorized to add products</div>;
  }

  const list: InputProps[] = [
    {
      type: "text",
      title: "Название товара*",
      name: "title",
      value: data.title,
      handle: handleChange,
      placeholder: "Название товара",
    },
    {
      type: "number",
      title: "Старая цена",
      name: "oldPrice",
      value: data.oldPrice || 0,
      handle: handleChange,
      placeholder: "Введите цену",
    },
    {
      type: "number",
      title: "Текущая цена*",
      name: "currentPrice",
      value: data.currentPrice || 0,
      handle: handleChange,
      placeholder: "Введите цену",
    },
    {
      type: "textarea",
      title: "Описание товара*",
      name: "description",
      value: data.description,
      handle: handleChange,
      placeholder: "Введите цену",
    },
    {
      type: "text",
      title: "Короткое описание товара*",
      name: "shortDesc",
      value: data.shortDesc,
      handle: handleChange,
      placeholder: "Введите текст",
    },
    {
      type: "multi",
      title: "Введите ссылки на изображения*",
      name: "images",
      value: data.images,
      handle: handleChange,
      placeholder: "Ссылки на изображения",
    },
    {
      type: "multi",
      title: "Введите размеры товара",
      name: "size",
      value: data.size || "",
      handle: handleChange,
      placeholder: "Размеры товара",
    },
    {
      type: "multi",
      title: "Введите цвета товара ",
      name: "color",
      value: data.color || "",
      handle: handleChange,
      placeholder: "Цвета товара",
    },
    {
      type: "spec",
      title: "Категория  товара",
      name: "category",
      value: data.specs.category || "",
      handle: handleChange,
      placeholder: "Введите текст",
    },
    {
      type: "spec",
      title: "Идентификатор товарной позиции*",
      name: "sku",
      value: data.specs.sku,
      handle: handleChange,
      placeholder: "Введите текст",
    },
    {
      type: "spec",
      title: "Теги товара",
      name: "tags",
      value: data.specs.tags || "",
      handle: handleChange,
      placeholder: "Введите текст",
    },
  ];

  return (
    <>
      <div className={style.wrap}>
        <Wrapper>
          <h2>Добавление товаров</h2>
          <form className={style.form} onSubmit={handleSubmit}>
            {list.map(
              ({ type, name, handle, placeholder, title, value }, index) => (
                <React.Fragment key={title}>
                  <Input
                    key={index}
                    type={type}
                    title={title}
                    name={name}
                    value={value}
                    handle={handle}
                    placeholder={placeholder}
                  />
                  {errors.includes(name) && (
                    <p style={{ color: "red", fontSize: "0.6rem", margin: "0" }}>
                      Поле выше обязательно для заполнения
                    </p>
                  )}
                </React.Fragment>
              )
            )}
            <button type="submit">Add Product</button>
          </form>
        </Wrapper>
      </div>
    </>
  );
};

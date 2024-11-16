import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { isAdmin } from "../../utils";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

import style from "./AddProduct.module.scss";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductDetail {
  title: string;
  shortDesc: string;
  description: string;
  currentPrice: number;
  oldPrice: number;
  images: string[];
  size: string;
  color: string;
  specs: Record<string, string>;
}

const AddProductForm = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [isAdminUser, setIsAdminUser] = useState(false);

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      console.log(isAdmin(user.uid));
      isAdmin(user.uid).then(setIsAdminUser);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdminUser) {
      try {
        await addDoc(collection(db, "products"), {
          title,
          shortDesc,
          currentPrice,
          oldPrice,
          createdAt: new Date(),
        });
        alert("Product added!");
      } catch (error) {
        alert("Error adding product");
      }
    } else {
      alert("You are not authorized to add products");
    }
  };

  if (!isAdminUser) {
    return <div>You are not authorized to add products</div>;
  }

  return (
    <>
      <div className={style.wrap}>
        <Wrapper>
          <h2>Добавление товаров</h2>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <textarea
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              placeholder="Short Description"
            />
            <input
              type="text"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              placeholder="Current Price"
            />
            <input
              type="text"
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
              placeholder="Old Price"
            />
            <button type="submit">Add Product</button>
          </form>
        </Wrapper>
      </div>
    </>
  );
};

export default AddProductForm;

import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { isAdmin } from "../../utils";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

import style from "./AddProduct.module.scss";
import { Wrapper } from "../Wrapper/Wrapper";

const AddProductForm = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const [isAdminUser, setIsAdminUser] = useState(false);

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [images, setImages] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [specs, setSpecs] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
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
          description,
          currentPrice,
          oldPrice,
          images,
          size,
          color,
          specs,
          additionalInformation,
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

  if (!isAdminUser) {
    return <div>You are not authorized to add products</div>;
  }

  return (
    <>
      <div className={style.wrap}>
        <Wrapper>
          <h2>Добавление товаров</h2>
          <form className={style.form} onSubmit={handleSubmit}>
            <Input value={title} setValue={setTitle} placeholder="title" />
            <Input
              value={shortDesc}
              setValue={setShortDesc}
              placeholder="shortDesc"
            />
            <Input
              value={description}
              setValue={setDescription}
              placeholder="description"
            />
            <Input
              value={currentPrice}
              setValue={setCurrentPrice}
              placeholder="currentPrice"
            />
            <Input
              value={oldPrice}
              setValue={setOldPrice}
              placeholder="oldPrice"
            />
            <Input value={images} setValue={setImages} placeholder="images" />
            <Input value={size} setValue={setSize} placeholder="size" />
            <Input value={color} setValue={setColor} placeholder="color" />
            <Input value={specs} setValue={setSpecs} placeholder="specs" />
            <Input
              value={additionalInformation}
              setValue={setAdditionalInformation}
              placeholder="additionalInformation"
            />
            <button type="submit">Add Product</button>
          </form>
        </Wrapper>
      </div>
    </>
  );
};

interface InputProps {
  value: any;
  setValue: (e: string) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, setValue, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder={placeholder}
    required
  />
);

export default AddProductForm;

import style from "./ProductDetails.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import { addToCart, addToFavorites } from "../../utils";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProductSpecifications } from "./ProductSpecifications/ProductSpecifications";
import { CiHeart } from "react-icons/ci";
import { Product } from "../../types";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Counter } from "./Counter/Counter";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SizeOptionSelector } from "./SizeOptionSelector/SizeOptionSelector";
import { ColorOptionSelector } from "./ColorOptionSelector/ColorOptionSelector";

// [x] Сделать карусель для вывода картинок
// [x] Сделать выбор размера и цвета
// [x] Сделать cчётчик

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [user] = useAuthState(auth);

  const [selectedSize, setSelectedSize] = useState<string>("L");
  const [selectedColor, setSelectedColor] = useState<string>("#816DFA");
  const [count, setCount] = useState<number>(1);

  const sizes = [
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XS", value: "XS" },
  ];
  const colors = ["#816DFA", "#000000", "#B88E2F"];

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data() as Product);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <LoadingSpinner />;
  }

  console.log(product);

  const handleAddToCart = () => {
    if (user) {
      addToCart(user.uid, {
        productId: id || "",
        title: product.title,
        image: "image",
        price: 1,
      });
      alert("Товар добавлен в корзину");
    } else {
      alert("Пожалуйста, войдите в аккаунт, чтобы добавить товар в корзину.");
    }
  };

  const handleFavoriteToggle = () => {
    if (user) {
      if (false) {
        // removeFromFavorites(user.uid, id || "");
      } else {
        alert("add fov");
        addToFavorites(user.uid, {
          id: id || "",
          title: product.title,
          image: "",
          price: 1,
        });
      }
    } else {
      alert("Пожалуйста, войдите в аккаунт, чтобы управлять избранным.");
    }
  };

  return (
    <Wrapper>
      <div className={style.wrap}>
        <ImageGallery images={product.images} />
        <div className={style.details}>
          <h2 className={style.title}>{product.title}</h2>
          <h3 className={style.price}>
            Rs. {product.currentPrice} <span>Rs. {product.oldPrice}</span>
          </h3>
          <div className={style.reviews} onClick={handleFavoriteToggle}>
            <CiHeart />| add to favorites
          </div>
          <p className={style.descr}>{product.description}</p>
          <div className={style.options}>
            <h4>Size</h4>
            <SizeOptionSelector
              options={sizes}
              selectedValue={selectedColor}
              onSelect={(value) => setSelectedColor(value)}
            />
          </div>
          <div className={style.options}>
            <h4>Color</h4>
            <ColorOptionSelector
              options={colors}
              selectedValue={selectedSize}
              onSelect={(value) => setSelectedSize(value)}
            />
          </div>
          <div className={style.add}>
            <Counter
              value={count}
              min={1}
              max={20}
              onChange={(newValue) => setCount(newValue)}
            />
            <button onClick={handleAddToCart} className={style.addToCart}>
              Add To Cart
            </button>
          </div>
          <hr className={style.line} />
          <ProductSpecifications />
        </div>
      </div>
    </Wrapper>
  );
};

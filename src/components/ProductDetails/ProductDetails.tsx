import style from "./ProductDetails.module.scss";

import img from "./../../assets/images/detail.jpg";
import { Wrapper } from "../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import { addToCart, addToFavorites } from "../../utils";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProductSpecifications } from "./ProductSpecifications/ProductSpecifications";
import { CiHeart } from "react-icons/ci";

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

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data() as ProductDetail);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Загрузка данных...</p>;
  }

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
        <div className={style.gallery}>
          <div className={style.thumbnail}>
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
          <div className={style.image}>
            {/* <img src={product.images[0]} alt="" /> */}
            <img src={img} alt="" />
          </div>
        </div>
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
            <div>
              <button className={`${style.size} ${style.active}`}>L</button>
              <button className={style.size}>XL</button>
              <button className={style.size}>XS</button>
            </div>
          </div>
          <div className={style.options}>
            <h4>Color</h4>
            <div>
              <button
                className={`${style.color} ${style.active}`}
                style={{ background: "#816dfa" }}
              ></button>
              <button
                className={style.color}
                style={{ background: "#000" }}
              ></button>
              <button
                className={style.color}
                style={{ background: "#B88E2F" }}
              ></button>
            </div>
          </div>
          <div className={style.add}>
            <Counter />
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

const Counter = () => (
  <div className={style.counter}>
    <button>-</button>
    <p>1</p>
    <button>+</button>
  </div>
);

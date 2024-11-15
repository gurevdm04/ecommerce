import style from "./ProductDetails.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import img from "./../../assets/images/detail.jpg";
import { Wrapper } from "../Wrapper/Wrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

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
  console.log("DATA:---", product);

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
          <div className={style.reviews}>
            <FaStar color="#FFC700" />
            <FaStar color="#FFC700" />
            <FaStar color="#FFC700" />
            <FaStar color="#FFC700" />
            <FaStar color="#FFC700" />| 5 Customer Review
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
            <button className={style.addToCart}>Add To Cart</button>
          </div>
          <hr className={style.line} />
          <div className={style.specifications}>
            <div className={style.specificationsRow}>
              <span>SKU</span>
              <span>:</span>
              <span>SS001</span>
            </div>
            <div className={style.specificationsRow}>
              <span>Category</span>
              <span>:</span>
              <span>Sofas</span>
            </div>
            <div className={style.specificationsRow}>
              <span>Tags</span>
              <span>:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className={style.specificationsRow}>
              <span>Share</span>
              <span>:</span>
              <span>
                <FaFacebook color="#000" style={{ margin: "0 0 0 10px" }} />
                <FaLinkedin color="#000" style={{ margin: "0 0 0 10px" }} />
                <FaSquareXTwitter
                  color="#000"
                  style={{ margin: "0 0 0 10px" }}
                />
              </span>
            </div>
          </div>
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

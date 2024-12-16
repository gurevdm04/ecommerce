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
import { ItemCartData, Product } from "../../types";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Counter } from "./Counter/Counter";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SizeOptionSelector } from "./SizeOptionSelector/SizeOptionSelector";
import { ColorOptionSelector } from "./ColorOptionSelector/ColorOptionSelector";
import { Tabs } from "../Tabs/Tabs";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [user] = useAuthState(auth);
  const [data, setData] = useState<ItemCartData>({
    productId: id || "",
    title: "",
    currentPrice: null,
    oldPrice: null,
    images: [],
    count: 1,
    size: "",
    color: "",
    specs: {
      sku: "",
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data() as Product;
      if (docSnap.exists()) {
        setProduct(data);
        setData((prev) => ({
          ...prev,
          currentPrice: data.currentPrice,
          oldPrice: data.oldPrice || 0,
          title: data.title,
          images: data.images,
          size: data.size ? data.size[0] : "",
          color: data.color ? data.color[0] : "",
          specs: {
            sku: data.specs.sku,
          },
        }));
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  if (!product) {
    return <LoadingSpinner />;
  }

  const handleAddToCart = () => {
    if (user) {
      console.log("addtocart", data);

      addToCart(user.uid, data);
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
          images: data.images,
          currentPrice: data.currentPrice || 0,
          oldPrice: data.oldPrice || 0,
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
              options={product.size}
              selectedValue={data.size}
              onSelect={(value) => setData((prev) => ({ ...prev, size: value }))}
            />
          </div>
          <div className={style.options}>
            <h4>Color</h4>
            <ColorOptionSelector
              options={product.color}
              selectedValue={data.color}
              onSelect={(value) =>
                setData((prev) => ({ ...prev, color: value }))
              }
            />
          </div>
          <div className={style.add}>
            <Counter
              value={data.count}
              min={1}
              max={20}
              onChange={(newValue) =>
                setData((prev) => ({ ...prev, count: newValue }))
              }
            />
            <button onClick={handleAddToCart} className={style.addToCart}>
              Add To Cart
            </button>
          </div>
          <hr className={style.line} />
          <ProductSpecifications specs={product.specs} />
        </div>
      </div>
      <Tabs description={product.description} />
    </Wrapper>
  );
};

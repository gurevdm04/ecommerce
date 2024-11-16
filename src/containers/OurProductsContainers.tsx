import React, { useEffect, useState } from "react";
import { Products } from "../components/Products/Products";
import { Button } from "../components/Button/Button";
import { ProductProps } from "../components/Product/Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const OurProductsContainers = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductProps[];
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2 style={titleStyle}>Our Products</h2>
      <Products products={products} />
      <Button style={btnStyle} label="Show More" />
    </>
  );
};

const titleStyle: React.CSSProperties | undefined = {
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "120%",
  textAlign: "center",
  color: "#3a3a3a",
  margin: "56px 0 32px 0",
};
const btnStyle: React.CSSProperties | undefined = {
  display: "block",
  margin: "32px auto 0 auto",
};

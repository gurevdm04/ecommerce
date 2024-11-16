import React, { useEffect, useState } from "react";
import { Products } from "../components/Products/Products";
import { Button } from "../components/Button/Button";
import { ProductProps } from "../components/Product/Product";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Grid } from "react-loader-spinner";

export const OurProductsContainers = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (loadMore: boolean = false) => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = loadMore
      ? query(productsRef, orderBy("createdAt"), startAfter(lastDoc), limit(8))
      : query(productsRef, orderBy("createdAt"), limit(8));

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductProps[];

      setProducts((prev) =>
        loadMore ? [...prev, ...newProducts] : newProducts
      );
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === 8);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2 style={titleStyle}>Our Products</h2>
      <Products products={products} />

      {hasMore && !loading && (
        <Button
          onClick={() => fetchProducts(true)}
          style={btnStyle}
          label="Show More"
        />
      )}
      {loading && (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#b88e2f"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{ justifyContent: "center", margin: "20px" }}
          wrapperClass="grid-wrapper"
        />
      )}
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

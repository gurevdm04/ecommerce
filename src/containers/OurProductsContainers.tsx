import React, { useEffect, useState } from "react";
import { Products } from "../components/Products/Products";
import { Button } from "../components/Button/Button";
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
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";
import { ProductCardProps } from "../types";

const ITEMS_PER_PAGE = 4;


export const OurProductsContainers = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (loadMore: boolean = false) => {
    setLoading(true);
    const productsRef = collection(db, "products");
    const q = loadMore
      ? query(productsRef, orderBy("createdAt"), startAfter(lastDoc), limit(ITEMS_PER_PAGE))
      : query(productsRef, orderBy("createdAt"), limit(ITEMS_PER_PAGE));

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductCardProps[];

      setProducts((prev) =>
        loadMore ? [...prev, ...newProducts] : newProducts
      );
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === ITEMS_PER_PAGE);
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
      <h2 style={titleStyle}>наши продукты</h2>
      <Products products={products} />

      {hasMore && !loading && (
        <Button
          onClick={() => fetchProducts(true)}
          style={btnStyle}
          label="показать больше"
        />
      )}
      {loading && <LoadingSpinner />}
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

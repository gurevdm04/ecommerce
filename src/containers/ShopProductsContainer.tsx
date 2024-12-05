import { useEffect, useState } from "react";
import { Products } from "../components/Products/Products";

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ProductProps } from "../components/Product/Product";
import { Button } from "../components/Button/Button";
import { Grid } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";

export const ShopProductsContainer = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "default";

  const fetchProducts = async (isLoadMore = false) => {
    if (loading) return;

    setLoading(true);

    try {
      let productsQuery;
      const productsRef = collection(db, "products");

      if (sort === "price-asc") {
        productsQuery = query(
          productsRef,
          orderBy("currentPrice", "asc"),
          limit(6),
          ...(isLoadMore && lastDoc ? [startAfter(lastDoc)] : [])
        );
      } else if (sort === "price-desc") {
        productsQuery = query(
          productsRef,
          orderBy("currentPrice", "desc"),
          limit(6),
          ...(isLoadMore && lastDoc ? [startAfter(lastDoc)] : [])
        );
      } else {
        productsQuery = query(
          productsRef,
          limit(6),
          ...(isLoadMore && lastDoc ? [startAfter(lastDoc)] : [])
        );
      }

      const snapshot = await getDocs(productsQuery);

      if (!snapshot.empty) {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductProps[];

        setProducts((prev) =>
          isLoadMore ? [...prev, ...newProducts] : newProducts
        );
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        setHasMore(snapshot.docs.length === 6); // Если меньше 6, значит больше данных нет
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [sort]);

  return (
    <>
      <Products products={products} />

      {hasMore && !loading && (
        <Button
          style={{ display: "block", margin: "10px auto" }}
          onClick={() => fetchProducts(true)}
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
      <br />
    </>
  );
};

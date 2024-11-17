import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { Products } from "../components/Products/Products";

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
import { ProductProps } from "../components/Product/Product";
import { Button } from "../components/Button/Button";
import { Grid } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
type SortOption = "default" | "cheap" | "expensive";

export const ShopProductsContainer = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get("sort") || "default";

  const fetchProducts = async (loadMore: boolean = false) => {
    setLoading(true);
    const productsRef = collection(db, "products");

    // Выбор сортировки
    let q;
    if (sortOption === "cheap") {
      q = loadMore
        ? query(
            productsRef,
            orderBy("currentPrice", "asc"),
            startAfter(lastDoc),
            limit(8)
          )
        : query(productsRef, orderBy("currentPrice", "asc"), limit(8));
    } else if (sortOption === "expensive") {
      q = loadMore
        ? query(
            productsRef,
            orderBy("currentPrice", "desc"),
            startAfter(lastDoc),
            limit(8)
          )
        : query(productsRef, orderBy("currentPrice", "desc"), limit(8));
    } else {
      q = loadMore
        ? query(productsRef, orderBy("createdAt"), startAfter(lastDoc), limit(8))
        : query(productsRef, orderBy("createdAt"), limit(8));
    }

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
    // Загружаем товары при смене параметра сортировки
    fetchProducts(false);
  }, [sortOption]);

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
    </>
  );
};

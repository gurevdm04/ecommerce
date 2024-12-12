import { useEffect, useState } from "react";
import { Products } from "../components/Products/Products";

import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Button } from "../components/Button/Button";
import { useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";
import { Product, ProductCardProps } from "../types";

const ITEMS_PER_PAGE = 8;

export const ShopProductsContainer = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [lastVisible, setLastVisible] = useState<any>(null); // Для отслеживания последнего документа.
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams] = useSearchParams();

  const db = getFirestore();
  const productsCollection = collection(db, "products");

  const fetchProducts = async (loadMore = false) => {
    setIsLoading(true);
    const filters = Object.fromEntries([...searchParams]);

    try {
      let q = query(productsCollection);
      console.log(filters);

      // Применение фильтров.
      if (filters.category) {
        q = query(q, where("specs.category", "==", filters.category));
      }
      if (filters.priceMin) {
        q = query(q, where("currentPrice", ">=", Number(filters.priceMin)));
      }
      if (filters.priceMax) {
        q = query(q, where("currentPrice", "<=", Number(filters.priceMax)));
      }

      // Применение сортировки.
      if (filters.sort) {
        switch (filters.sort) {
          case "alphabetical_asc":
            q = query(q, orderBy("title", "asc"));
            break;
          case "alphabetical_desc":
            q = query(q, orderBy("title", "desc"));
            break;
          case "price_asc":
            q = query(q, orderBy("currentPrice", "asc"));
            break;
          case "price_desc":
            q = query(q, orderBy("currentPrice", "desc"));
            break;
          default:
            q = query(q, orderBy("createdAt", "desc")); // Default: по дате добавления.
        }
      } else {
        q = query(q, orderBy("createdAt", "desc")); // Default: по дате добавления.
      }

      // Пагинация.
      if (loadMore && lastVisible) {
        q = query(q, startAfter(lastVisible), limit(ITEMS_PER_PAGE));
      } else {
        q = query(q, limit(ITEMS_PER_PAGE));
      }

      const snapshot = await getDocs(q);
      const newProducts = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as unknown as Product)
      );

      setProducts(loadMore ? [...products, ...newProducts] : newProducts);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const loadMoreProducts = () => {
    if (!isLoading && hasMore) {
      fetchProducts(true);
    }
  };

  return (
    <>
      <Products products={products} />

      {hasMore && !isLoading && (
        <Button
          style={{ display: "block", margin: "10px auto" }}
          onClick={loadMoreProducts}
          label="Show More"
        />
      )}
      {isLoading && <LoadingSpinner />}
      <br />
    </>
  );
};

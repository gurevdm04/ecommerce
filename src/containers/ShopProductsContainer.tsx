import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { Products } from "../components/Products/Products";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { ProductProps } from "../components/Product/Product";

export const ShopProductsContainer = () => {
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
      <Products products={products} />
      <Pagination />
    </>
  );
};

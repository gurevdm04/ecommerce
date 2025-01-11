import { useEffect, useState } from "react";
// import { Product } from "../../Product/Product";
import style from "./AllProducts.module.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { Product } from "../../Product/Product";
import { Product as ProductType } from "../../../types";

export const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Получение списка товаров
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData: ProductType[] = querySnapshot.docs.map(
        (doc): ProductType => ({
          id: doc.id,
          ...(doc.data() as ProductType),
        })
      ) as ProductType[];
      setProducts(productsData);
    } catch (error) {
      console.error("Ошибка при получении товаров:", error);
    }
    setLoading(false);
  };

  // Удаление товара
  const deleteProduct = async (productId: string) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Загрузка товаров...</p>;
  }

  return (
    <div>
      <h2>Все товары</h2>
      {products.length === 0 ? (
        <p>Список избранного пуст</p>
      ) : (
        <div className={style.wrap}>
          {products.map(
            ({ id, currentPrice, images, oldPrice, shortDesc, title }) => (
              <Product
                id={id || ""}
                key={id}
                currentPrice={currentPrice || 0}
                images={images}
                oldPrice={oldPrice || 0}
                shortDesc={shortDesc}
                title={title}
                deleteProduct={() => deleteProduct(id || "")}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

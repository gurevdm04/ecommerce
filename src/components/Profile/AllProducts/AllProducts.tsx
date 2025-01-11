import { useEffect, useState } from "react";
// import { Product } from "../../Product/Product";
import style from "./AllProducts.module.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import { Product } from "../../Product/Product";
import { Product as ProductType } from "../../../types";
import { AddProductForm } from "../../AddProduct/AddProduct";
import { toastError } from "../../../toastify/Toastify";
import { Loader } from "../Loader/Loader";

export const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [idEdit, setIdEdit] = useState<string>("");

  const enableEditMode = (id: string) => {
    setIdEdit(id);
    setIsEditing(true);
  };
  const disableEditMode = () => {
    setIsEditing(false);
  };

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
      toastError("Ошибка при получении товаров");
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
      toastError("Ошибка при удалении товара");
      console.error("Ошибка при удалении товара:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {isEditing ? (
        <>
          <button onClick={disableEditMode}>вернуться назад</button>
          <AddProductForm isEdit={true} idEdit={idEdit} />
        </>
      ) : (
        <>
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
                    enableEditMode={enableEditMode}
                  />
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

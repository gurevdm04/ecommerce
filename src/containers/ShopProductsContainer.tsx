import { Pagination } from "../components/Pagination/Pagination";
import { Products } from "../components/Products/Products";

export const ShopProductsContainer = () => {
  const items: any[] = Array.from({ length: 8 }, (_, index) => index);

  return (
    <>
      <Products products={items} />
      <Pagination />
    </>
  );
};

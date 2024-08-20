import { InputSearchItem } from "../../components/InputSearchItem/InputSearchItem";
import { Pagination } from "../../components/Pagination/Pagination";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import style from "./ShopPage.module.scss";

export const ShopPage = () => {
  return (
    <div className={style.grid}>
      <div className={style.sidebar}>
        <div>
          <h2>Price Range</h2>
          <ul>
            <li>check 1</li>
            <li>check 2</li>
            <li>check 3</li>
          </ul>
        </div>
        <div>
          <h2>Price Range</h2>
          <ul>
            <li>check 1</li>
            <li>check 2</li>
            <li>check 3</li>
          </ul>
        </div>
      </div>
      <div className={style.content}>
        <h2 className={style.title}>Our Collection Of Products</h2>
        <InputSearchItem text="" />
        <p className={style.text}>Showing 1–12 of 24 item(s)</p>
        <div className={style.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Pagination />
      </div>
    </div>
  );
};

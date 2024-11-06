import style from "./OurProducts.module.scss";
import { Product } from "../Product/Product";

export const OurProducts = () => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>Our Products</h2>
      <div className={style.grid}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

import style from "./Products.module.scss";
import { Product } from "../Product/Product";

export const Products = () => {
  return (
    <div className={style.wrap}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

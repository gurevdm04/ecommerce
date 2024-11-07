import style from "./OurProducts.module.scss";
import { Product } from "../Product/Product";
import { Button } from "../Button/Button";

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
      <Button
        label="Show more"
        style={{ display: "block", margin: "20px auto 0 auto" }}
      />
    </div>
  );
};

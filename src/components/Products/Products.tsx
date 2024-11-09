import style from "./Products.module.scss";
import { Product } from "../Product/Product";
import { Wrapper } from "../Wrapper/Wrapper";

export const Products = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

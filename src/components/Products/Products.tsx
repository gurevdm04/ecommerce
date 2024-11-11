import style from "./Products.module.scss";
import { Product } from "../Product/Product";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductsProps {
  products: any[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        {products.map(() => (
          <Product />
        ))}
      </div>
    </Wrapper>
  );
};

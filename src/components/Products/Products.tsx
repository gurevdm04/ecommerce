import style from "./Products.module.scss";
import { Product, ProductProps } from "../Product/Product";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductsProps {
  products: ProductProps[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        {products.map((productData: ProductProps) => (
          <Product key={productData.id} {...productData} />
        ))}
      </div>
    </Wrapper>
  );
};

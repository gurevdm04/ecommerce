import style from "./Products.module.scss";
import { Product, ProductCardProps } from "../Product/Product";
import { Wrapper } from "../Wrapper/Wrapper";

interface ProductsProps {
  products: ProductCardProps[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        {products.map((productData: ProductCardProps) => (
          <Product key={productData.id} {...productData} />
        ))}
      </div>
    </Wrapper>
  );
};

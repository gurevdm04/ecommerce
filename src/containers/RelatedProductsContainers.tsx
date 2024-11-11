import { Button } from "../components/Button/Button";
import { Products } from "../components/Products/Products";

export const RelatedProductsContainers = () => {
  const btnStyle: React.CSSProperties | undefined = {
    display: "block",
    margin: "32px auto 92px auto",
  };
  const titleStyle: React.CSSProperties | undefined = {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "36px",
    color: "#000",
    margin: "56px 0 26px 0",
  };

  const items: any[] = Array.from({ length: 4 }, (_, index) => index);

  return (
    <>
      <h2 style={titleStyle}>Related Products</h2>
      <Products products={items} />
      <Button style={btnStyle} label="Show More" />
    </>
  );
};

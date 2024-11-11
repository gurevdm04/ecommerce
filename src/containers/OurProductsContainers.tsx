import React from "react";
import { Products } from "../components/Products/Products";
import { Button } from "../components/Button/Button";

export const OurProductsContainers = () => {
  const titleStyle: React.CSSProperties | undefined = {
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#3a3a3a",
    margin: "56px 0 32px 0",
  };
  const btnStyle: React.CSSProperties | undefined = {
    display: "block",
    margin: "32px auto 0 auto",
  };

  const items: any[] = Array.from({ length: 8 }, (_, index) => index);

  return (
    <>
      <h2 style={titleStyle}>Our Products</h2>
      <Products products={items} />
      <Button style={btnStyle} label="Show More" />
    </>
  );
};

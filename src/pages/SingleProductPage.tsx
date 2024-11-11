import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { Tabs } from "../components/Tabs/Tabs";
import { RelatedProductsContainers } from "../containers/RelatedProductsContainers";

export const SingleProductPage = () => {
  return (
    <>
      <Breadcrumbs />
      <ProductDetails />
      <Tabs />
      <RelatedProductsContainers />
    </>
  );
};

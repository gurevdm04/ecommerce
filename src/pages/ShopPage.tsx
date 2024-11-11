import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { ProductFilterBar } from "../components/ProductFilterBar/ProductFilterBar";
import { ShopProductsContainer } from "../containers/ShopProductsContainer";
import { ServiceBenefits } from "../components/ServiceBenefits/ServiceBenefits";

export const ShopPage = () => {
  return (
    <>
      <BreadcrumbHeader />
      <ProductFilterBar />
      <ShopProductsContainer />
      <ServiceBenefits />
    </>
  );
};

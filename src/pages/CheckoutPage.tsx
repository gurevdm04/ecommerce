import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { Checkout } from "../components/Checkout/Checkout";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { ServiceBenefits } from "../components/ServiceBenefits/ServiceBenefits";

export const CheckoutPage = () => {
  return (
    <>
      <BreadcrumbHeader />
      <Checkout />
      <ServiceBenefits />
    </>
  );
};

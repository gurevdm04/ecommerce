import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { Checkout } from "../components/Checkout/Checkout";
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

import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { Cart } from "../components/Cart/Cart";
import { ServiceBenefits } from "../components/ServiceBenefits/ServiceBenefits";

export const CartPage = () => {
  return (
    <>
      <BreadcrumbHeader />
      <Cart />
      <ServiceBenefits />
    </>
  );
};

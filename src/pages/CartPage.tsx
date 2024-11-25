import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { ServiceBenefits } from "../components/ServiceBenefits/ServiceBenefits";
import { CartContainers } from "../containers/CartContainers";

export const CartPage = () => {
  return (
    <>
      <BreadcrumbHeader />
      <CartContainers />
      <ServiceBenefits />
    </>
  );
};

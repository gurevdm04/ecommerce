import { BreadcrumbHeader } from "../components/BreadcrumbHeader/BreadcrumbHeader";
import { Contact } from "../components/Contact/Contact";
import { ServiceBenefits } from "../components/ServiceBenefits/ServiceBenefits";

export const ContactPage = () => {
  return (
    <>
      <BreadcrumbHeader />
      <Contact />
      <ServiceBenefits />
    </>
  );
};

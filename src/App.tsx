import { Assortment } from "./components/Assortment/Assortment";
import { Banner } from "./components/Banner/Banner";
import { BreadcrumbHeader } from "./components/BreadcrumbHeader/BreadcrumbHeader";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inspirations } from "./components/Inspirations/Inspirations";
import { Pagination } from "./components/Pagination/Pagination";
import { PhotoGrid } from "./components/PhotoGrid/PhotoGrid";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { ProductFilterBar } from "./components/ProductFilterBar/ProductFilterBar";
import { Products } from "./components/Products/Products";
import { ServiceBenefits } from "./components/ServiceBenefits/ServiceBenefits";
import { Tabs } from "./components/Tabs/Tabs";

function App() {
  return (
    <>
      <Header />
      {/* <Banner />
      <Assortment />
      <OurProducts />
      <Inspirations />
      <PhotoGrid /> */}
      <Breadcrumbs />
      <ProductDetails />
      {/* <BreadcrumbHeader />
      <ProductFilterBar />
      <Tabs />
      <Products />
      <Pagination />
      <ServiceBenefits /> */}
      <Footer />
    </>
  );
}

export default App;

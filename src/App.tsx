import { Assortment } from "./components/Assortment/Assortment";
import { Banner } from "./components/Banner/Banner";
import { BreadcrumbHeader } from "./components/BreadcrumbHeader/BreadcrumbHeader";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inspirations } from "./components/Inspirations/Inspirations";
import { Pagination } from "./components/Pagination/Pagination";
import { PhotoGrid } from "./components/PhotoGrid/PhotoGrid";
import { ProductFilterBar } from "./components/ProductFilterBar/ProductFilterBar";
import { Products } from "./components/Products/Products";
import { ServiceBenefits } from "./components/ServiceBenefits/ServiceBenefits";

function App() {
  return (
    <>
      <Header />
      {/* <Banner />
      <Assortment />
      <OurProducts />
      <Inspirations />
      <PhotoGrid /> */}
      <BreadcrumbHeader />
      <ProductFilterBar />
      <Products />
      <Pagination/>
      <ServiceBenefits />
      <Footer />
    </>
  );
}

export default App;

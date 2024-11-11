import { Assortment } from "../components/Assortment/Assortment";
import { Banner } from "../components/Banner/Banner";
import { Inspirations } from "../components/Inspirations/Inspirations";
import { PhotoGrid } from "../components/PhotoGrid/PhotoGrid";
import { OurProductsContainers } from "../containers/OurProductsContainers";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Assortment />
      <OurProductsContainers />
      <Inspirations />
      <PhotoGrid />
    </>
  );
};

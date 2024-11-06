import { Assortment } from "./components/Assortment/Assortment";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inspirations } from "./components/Inspirations/Inspirations";
import { PhotoGrid } from "./components/PhotoGrid/PhotoGrid";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Assortment />
      <Inspirations />
      <PhotoGrid />
      <Footer />
    </>
  );
}

export default App;

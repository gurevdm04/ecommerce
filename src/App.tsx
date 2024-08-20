import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AccountOverview } from "./pages/AccountOverview/AccountOverview";
import { Authentication } from "./pages/Authentication/Authentication";
import { CartPage } from "./pages/CartPage/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { ShopPage } from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <>
      <Header />
      {/* <ShopPage /> */}
      {/* <CartPage /> */}
      {/* <Authentication /> */}
      {/* <AccountOverview /> */}
      {/* <CheckoutPage /> */}
      <ProductDetailPage />
      <Footer />
    </>
  );
}

export default App;

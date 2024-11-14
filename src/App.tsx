import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ShopPage } from "./pages/ShopPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { ROUTES } from "./constants/routes";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { clearUser, setUser } from "./store/slices/authSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        const { email, uid } = user;
        dispatch(setUser({ email, uid }));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={`${ROUTES.SHOP}/:id`} element={<SingleProductPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

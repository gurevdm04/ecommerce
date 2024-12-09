// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // {/* </StrictMode> */}
);

//  [ ] Сделать правильную сортировку товаров
//  [ ] Сделать верстку для истории заказов
//  [ ] Сделать верстку для избранных товаров
//  [ ] Сделать адаптив
//  [x] Сделать предзагрузки:
//    [x] Корзины
//    [x] Профиля
//  [ ] Сделать растояние между ценами

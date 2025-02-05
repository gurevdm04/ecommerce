import { ROUTES } from "./routes";

type items = {
  text: string;
  path: string;
}[];

export const listLinks: items = [
  {
    text: "Главная",
    path: ROUTES.HOME,
  },
  {
    text: "Товары",
    path: ROUTES.SHOP,
  },
  {
    text: "Контанты",
    path: ROUTES.CONTACT,
  },
];
export const listHelp: items = [
  {
    text: "Способы оплаты",
    path: "https://github.com/gurevdm04",
  },
  {
    text: "Возвраты",
    path: "https://github.com/gurevdm04",
  },
  {
    text: "Политика конфиденциальности",
    path: "https://github.com/gurevdm04",
  },
];

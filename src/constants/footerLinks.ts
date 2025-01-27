import { ROUTES } from "./routes";

type items = {
  text: string;
  path: string;
}[];

export const listLinks: items = [
  {
    text: "Home",
    path: ROUTES.HOME,
  },
  {
    text: "Shop",
    path: ROUTES.SHOP,
  },
  {
    text: "Contact",
    path: ROUTES.CONTACT,
  },
];
export const listHelp: items = [
  {
    text: "Payment Options",
    path: "https://github.com/gurevdm04",
  },
  {
    text: "Returns",
    path: "https://github.com/gurevdm04",
  },
  {
    text: "Privacy Policies",
    path: "https://github.com/gurevdm04",
  },
];

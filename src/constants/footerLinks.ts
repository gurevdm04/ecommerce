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
    path: "#Payment Options",
  },
  {
    text: "Returns",
    path: "#Returns",
  },
  {
    text: "Privacy Policies",
    path: "#Privacy Policies",
  },
];

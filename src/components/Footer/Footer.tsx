import { Divider } from "../Divider/Divider";
import { FooterList } from "../FooterList/FooterList";
import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Footer.module.scss";

export const Footer = () => {
  type items = {
    text: string;
    path: string;
  }[];
  const listLinks: items = [
    {
      text: "Home",
      path: "home",
    },
    {
      text: "Shop",
      path: "shop",
    },
    {
      text: "About",
      path: "about",
    },
    {
      text: "Contact",
      path: "contact",
    },
  ];
  const listHelp: items = [
    {
      text: "Payment Options",
      path: "PaymentOptions",
    },
    {
      text: "Returns",
      path: "Returns",
    },
    {
      text: "Privacy Policies",
      path: "PrivacyPolicies",
    },
  ];
  return (
    <>
      <Divider />
      <Wrapper>
        <div className={style.main}>
          <div className={style.address}>
            <p className={style.logo}>Funiro.</p>
            <p className={style.text}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <FooterList title="Links" items={listLinks} />
          <FooterList title="Help" items={listHelp} />
          <div className={style.newsletter}>
            <h2 className={style.title}>Newsletter</h2>
            <div>
              <input
                className={style.input}
                placeholder="Enter Your Email Address"
                type="text"
              />
              <button className={style.btn}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className={style.footer}>2023 furino. All rights reverved</div>
      </Wrapper>
    </>
  );
};

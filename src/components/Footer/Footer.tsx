import { listHelp, listLinks } from "../../constants/footerLinks";
import { Divider } from "../Divider/Divider";
import { FooterList } from "../FooterList/FooterList";
import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Footer.module.scss";

export const Footer = () => {
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
          <FooterList title="Help" items={listHelp} isA={true} />
        </div>
        <div className={style.footer}>2023 furino. All rights reverved</div>
      </Wrapper>
    </>
  );
};

import mainStyle from "./Footer.module.scss";
import { FooterLink } from "./FooterLink/FooterLink";

export const Footer = () => {
  return (
    <div className={mainStyle.wrap}>
      <div>
        <h2>Pages</h2>
        <ul>
          <FooterLink text="Shop" link="#" />
          <FooterLink text="Log in" link="#" />
          <FooterLink text="Cart" link="#" />
        </ul>
      </div>
      <div>
        <h2>About</h2>
        <ul>
          <FooterLink text="GitHab" link="#" />
          <FooterLink text="Instagram" link="#" />
        </ul>
      </div>
    </div>
  );
};

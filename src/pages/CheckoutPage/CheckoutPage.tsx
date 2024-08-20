import style from "./CheckoutPage.module.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const CheckoutPage = () => {
  return (
    <div className={style.grid}>
      <div className={style.address}>
        <h2 className={style.title}>Contact information</h2>
        <form className={style.form}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Input placeholder="Your Phone number *" />
          <Input placeholder="Address *" />
        <Button text="Continue to shipping" />
        </form>
      </div>
      <div className={style.detail}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

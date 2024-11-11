import style from "./Cart.module.scss";
import { MdDelete } from "react-icons/md";

import img from "./../../assets/images/product.png";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.cart}>
          <div className={style.header}>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
          <div className={style.items}>
            <div className={style.img}>
              <img src={img} alt="" />
            </div>
            <div className={style.name}>Asgaard sofa</div>
            <div className={style.price}>Rs. 250,000.00</div>
            <div className={style.quantity}>1</div>
            <div className={style.subtotalPrice}>Rs. 250,000.00</div>
            <div className={style.delete}>
              <MdDelete color="#B88E2F" fontSize={40} />
            </div>
          </div>
        </div>
        <div className={style.results}>
          <h2 className={style.title}>Cart Totals</h2>
          <div className={style.subtotal}>
            <p>Subtotal</p>
            <span>Rs. 250,000.00</span>
          </div>
          <div className={style.total}>
            <p>Total</p>
            <span>Rs. 250,000.00</span>
          </div>
          <Link to="/checkout" className={style.btn}>
            Check Out
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

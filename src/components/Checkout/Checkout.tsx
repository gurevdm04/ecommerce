import style from "./Checkout.module.scss";

export const Checkout = () => {
  return (
    <div className={style.wrap}>
      <div className={style.detail}>
        <h2 className={style.detailTitle}>Billing details</h2>
        <div className={style.row}>
          <div>
            <h4>First Name</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Last Name</h4>
            <input type="text" />
          </div>
        </div>
        <h4>Company Name (Optional)</h4>
        <input type="text" />
        <h4>Country / Region</h4>
        <select>
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </div>
      <div className={style.confirm}>
        <div className={style.row}>
          <h3>Product</h3>
          <h3>Subtotal</h3>
        </div>
        <div className={style.row}>
          <p className={style.itemText}>Asgaard sofa</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className={style.row}>
          <p>Subtotal</p>
          <p>Rs. 250,000.00</p>
        </div>
        <div className={style.row}>
          <p>Total</p>
          <p className={style.totalPrice}>Rs. 250,000.00</p>
        </div>
        <hr />
        <button className={style.btn}>Place order</button>
      </div>
    </div>
  );
};

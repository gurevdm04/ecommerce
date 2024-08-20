import React from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import style from "./AccountOverview.module.scss";

export const AccountOverview = () => {
  return (
    <div>
      <div className={style.header}>
        <h2 className={style.title}>Account Overview</h2>
        <p className={style.subtitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <div className={style.orders}>
        <div className={style.orderNo}>Order No</div>
        <div className={style.items}>Items</div>
        <div className={style.deliveryDate}>Delivery Date</div>
        <div className={style.trackingID}>Tracking ID</div>
        <div className={style.price}>Price</div>
      </div>
      <div className={style.orders}>
        <div className={style.orderNo}>1</div>
        <div className={style.items}>
          Items
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={style.deliveryDate}>00.00.0000</div>
        <div className={style.trackingID}>124564</div>
        <div className={style.price}>$100</div>
      </div>
      <div className={style.favorites}>
        <h2 className={style.favoritesTitle}>Избранное</h2>
        <div className={style.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

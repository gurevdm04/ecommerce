import React from "react";
import style from "./ProductSpecifications.module.scss";
interface ProductSpecificationsProps {
  specs: {
    category?: string;
    sku: string;
    tags?: string;
  };
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specs,
}) => {
  return (
    <div className={style.specifications}>
      <div className={style.specificationsRow}>
        <span>SKU</span>
        <span>:</span>
        <span>{specs.sku}</span>
      </div>
      {specs.category && (
        <div className={style.specificationsRow}>
          <span>Category</span>
          <span>:</span>
          <span>{specs.category}</span>
        </div>
      )}
      {specs.tags && (
        <div className={style.specificationsRow}>
          <span>Tags</span>
          <span>:</span>
          <span>{specs.tags}</span>
        </div>
      )}
    </div>
  );
};

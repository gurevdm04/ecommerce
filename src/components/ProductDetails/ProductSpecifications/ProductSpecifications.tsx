import style from "./ProductSpecifications.module.scss";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const ProductSpecifications = () => {
  return (
    <div className={style.specifications}>
      <div className={style.specificationsRow}>
        <span>SKU</span>
        <span>:</span>
        <span>SS001</span>
      </div>
      <div className={style.specificationsRow}>
        <span>Category</span>
        <span>:</span>
        <span>Sofas</span>
      </div>
      <div className={style.specificationsRow}>
        <span>Tags</span>
        <span>:</span>
        <span>Sofa, Chair, Home, Shop</span>
      </div>
      <div className={style.specificationsRow}>
        <span>Share</span>
        <span>:</span>
        <span>
          <FaFacebook color="#000" style={{ margin: "0 0 0 10px" }} />
          <FaLinkedin color="#000" style={{ margin: "0 0 0 10px" }} />
          <FaSquareXTwitter color="#000" style={{ margin: "0 0 0 10px" }} />
        </span>
      </div>
    </div>
  );
};

import style from "./Product.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ProductCardProps } from "../../types";
import { ImageWithPlaceholder } from "../ImageWithPlaceholder/ImageWithPlaceholder";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa6";

export const Product: React.FC<ProductCardProps> = ({
  title,
  images,
  currentPrice,
  oldPrice,
  shortDesc,
  id,
  deleteProduct,
  enableEditMode,
}) => {
  return (
    <>
      {deleteProduct ? (
        <div>
          <Content
            currentPrice={currentPrice}
            images={images}
            oldPrice={oldPrice}
            shortDesc={shortDesc}
            title={title}
            deleteProduct={deleteProduct}
            id={id}
            enableEditMode={enableEditMode}
          />
        </div>
      ) : (
        <Link to={ROUTES.SHOP_ITEM(id)} className={style.wrap}>
          <Content
            currentPrice={currentPrice}
            images={images}
            oldPrice={oldPrice}
            shortDesc={shortDesc}
            title={title}
            deleteProduct={deleteProduct}
            id={id}
          />
        </Link>
      )}
    </>
  );
};

const Content: React.FC<ProductCardProps> = ({
  currentPrice,
  images,
  oldPrice,
  shortDesc,
  title,
  deleteProduct,
  enableEditMode,
  id,
}) => (
  <>
    <span className={style.imageBox}>
      <div className={style.productConrol}>
        {enableEditMode && (
          <>
            <span>
              <FaPen
                onClick={() => enableEditMode(id)}
                className={style.productRe}
              />
            </span>
            <span onClick={deleteProduct}>
              <MdDeleteForever className={style.productDelete} />
            </span>
          </>
        )}
      </div>
      <ImageWithPlaceholder className={style.img} alt="" src={images[0]} />
    </span>
    <div className={style.block}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.subtitle}>{shortDesc}</p>
      <div className={style.price}>
        <p className={style.currentPrice}>Rp {currentPrice}</p>
        {!!oldPrice && <p className={style.oldPrice}>Rp {oldPrice}</p>}
      </div>
    </div>
  </>
);

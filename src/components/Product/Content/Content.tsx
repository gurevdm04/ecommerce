import { FaPen } from "react-icons/fa";
import { ProductCardProps } from "../../../types";
import style from "./Content.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { ImageWithPlaceholder } from "../../ImageWithPlaceholder/ImageWithPlaceholder";

export const Content: React.FC<ProductCardProps> = ({
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
    <div className={style.wrap}>
      <span className={style.imageBox}>
        {enableEditMode && (
          <div className={style.productConrol}>
            <span>
              <FaPen
                onClick={() => enableEditMode(id)}
                className={style.productRe}
              />
            </span>
            <span onClick={deleteProduct}>
              <MdDeleteForever className={style.productDelete} />
            </span>
          </div>
        )}
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
    </div>
  </>
);

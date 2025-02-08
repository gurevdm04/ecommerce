import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ProductCardProps } from "../../types";
import { Content } from "./Content/Content";

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
  const inside = (
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
  );
  return (
    <>
      {deleteProduct ? (
        <>{inside}</>
      ) : (
        <Link to={ROUTES.SHOP_ITEM(id)}>{inside}</Link>
      )}
    </>
  );
};

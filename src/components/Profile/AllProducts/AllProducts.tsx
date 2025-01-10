import { Product } from "../../Product/Product";
import style from "./AllProducts.module.scss";

const favorites = [
  {
    id: "test",
    currentPrice: 12,
    images: ["test"],
    oldPrice: 13,
    shortDesc: "test",
    title: "test",
  },
  {
    id: "test",
    currentPrice: 12,
    images: ["test"],
    oldPrice: 13,
    shortDesc: "test",
    title: "test",
  },
  {
    id: "test",
    currentPrice: 12,
    images: ["test"],
    oldPrice: 13,
    shortDesc: "test",
    title: "test",
  },
];

export const AllProducts = () => {
  return (
    <div>
      <h2>Все товары</h2>
      {favorites.length === 0 ? (
        <p>Список избранного пуст</p>
      ) : (
        <div className={style.wrap}>
          {favorites.map(
            ({ id, currentPrice, images, oldPrice, shortDesc, title }) => (
              <Product
                id={id}
                key={id}
                currentPrice={currentPrice}
                images={images}
                oldPrice={oldPrice}
                shortDesc={shortDesc}
                title={title}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "../Loader/Loader";
import { Product } from "../../Product/Product";
import { ProductCardProps } from "../../../types";
import style from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const favRef = doc(db, "favorites", user.uid);
        const favSnap = await getDoc(favRef);

        if (favSnap.exists()) {
          setFavorites(favSnap.data().favorites || []);
        }
        setLoading(false);
      };

      fetchFavorites();
    }
  }, [user]);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Избранное</h2>
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

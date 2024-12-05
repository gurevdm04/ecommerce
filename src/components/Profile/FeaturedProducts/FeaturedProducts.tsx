import React, { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "../Loader/Loader";

interface FavoriteItem {
  productId: string;
  title: string;
  image: string;
  price: number;
}

export const FeaturedProducts = () => {
  const [user] = useAuthState(auth);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
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
        favorites.map((item) => (
          <div key={item.productId}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>Цена: {item.price} руб.</p>
          </div>
        ))
      )}
    </div>
  );
};

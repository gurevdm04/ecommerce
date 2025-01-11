import { useAuthState } from "react-firebase-hooks/auth";
import { CartList } from "../components/CartList/CartList";
import { CartTotalPrice } from "../components/CartTotalPrice/CartTotalPrice";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { auth, db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";
import { ItemCartData } from "../types";

import style from "./index.module.scss";
import { Navigate } from "react-router-dom";
import { toastError } from "../toastify/Toastify";

export const CartContainers = () => {
  const [user] = useAuthState(auth);
  const [cartItems, setCartItems] = useState<ItemCartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        const cartRef = doc(db, "carts", user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCartItems(cartSnap.data().items || []);
        }
        setLoading(false);
      };

      fetchCart();
    }
  }, [user]);

  const removeItem = async (productId: string) => {
    if (!user) return;

    try {
      const cartRef = doc(db, "carts", user.uid);
      const updatedItems = cartItems.filter(
        (item) => item.productId !== productId
      );
      setCartItems(updatedItems);
      await updateDoc(cartRef, { items: updatedItems });
    } catch (error) {
      toastError('Ошибка удаления товара из корзины')
      console.error("Ошибка удаления товара из корзины:", error);
    }
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  if (loading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <div className={style.CartContainers}>
        <CartList item={cartItems} removeItem={removeItem} />
        <CartTotalPrice item={cartItems} />
      </div>
    </Wrapper>
  );
};

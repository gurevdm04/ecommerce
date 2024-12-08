import { useAuthState } from "react-firebase-hooks/auth";
import { CartList } from "../components/CartList/CartList";
import { CartTotalPrice } from "../components/CartTotalPrice/CartTotalPrice";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { auth, db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { createOrder } from "../utils";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";
import { ItemCartData } from "../types";

const styles: React.CSSProperties | undefined = {
  display: "flex",
  gap: "30px",
  justifyContent: "space-between",
  margin: "72px 0",
};

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
      console.error("Ошибка удаления товара из корзины:", error);
    }
  };

  if (!user) return <p>войдите...</p>;
  if (loading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <div style={styles}>
        <CartList item={cartItems} removeItem={removeItem} />
        <CartTotalPrice item={cartItems} />
      </div>
    </Wrapper>
  );
};



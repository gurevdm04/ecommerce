import { useAuthState } from "react-firebase-hooks/auth";
import { Wrapper } from "../Wrapper/Wrapper";
import style from "./Checkout.module.scss";
import { auth, db } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { CartUserData, ItemCartData } from "../../types";
import { doc, getDoc } from "firebase/firestore";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { createOrder } from "../../utils";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { toastInfo, toastWarning } from "../../toastify/Toastify";

export const Checkout = () => {
  const [user] = useAuthState(auth);
  const [cartItems, setCartItems] = useState<ItemCartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<CartUserData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  let price = 0;

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        const cartRef = doc(db, "carts", user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          const items = cartSnap.data().items || [];
          setCartItems(items);

          if (items.length === 0) {
            navigate(ROUTES.CART);
          }
        }
        setLoading(false);
      };

      fetchCart();
    }
  }, [user]);

  cartItems.forEach((item) => {
    if (item.currentPrice) {
      price += item.count * item.currentPrice;
    }
  });

  if (!user) {
    return <Navigate to="/" />;
  }

  if (loading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <form className={style.wrap}>
        <div className={style.detail}>
          <h2 className={style.detailTitle}>Платежные реквизиты</h2>
          <div className={style.row}>
            <div>
              <h4>Имя</h4>
              <input
                value={userData.firstName}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, firstName: e.target.value }))
                }
                type="text"
                required
              />
            </div>
            <div>
              <h4>Фамилия</h4>
              <input
                value={userData.lastName}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, lastName: e.target.value }))
                }
                type="text"
                required
              />
            </div>
          </div>
          <h4>Номер Телефона</h4>
          <input
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            type="tel"
            required
          />
          <h4>Адрес</h4>
          <input
            value={userData.address}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, address: e.target.value }))
            }
            type="text"
            required
          />
        </div>
        <div className={style.confirm}>
          <div className={style.row}>
            <h3>Продукт</h3>
            <h3>Промежуточный итог</h3>
          </div>
          {cartItems.map((item) => (
            <div
              className={style.row}
              key={item.productId + item.color + item.size}
            >
              <p className={style.itemText}>
                {item.title} x{item.count}
              </p>
              <p>Rs. {item.currentPrice && item.currentPrice * item.count}</p>
            </div>
          ))}

          <div className={style.row}>
            <p>Всего</p>
            <p className={style.totalPrice}>Rs. {price}</p>
          </div>
          <hr />
          <CheckoutButton
            className={style.btn}
            items={cartItems}
            totalAmount={price}
            userData={userData}
          />
        </div>
      </form>
    </Wrapper>
  );
};

interface CheckoutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  items: any[];
  totalAmount: number;
  userData: CartUserData;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  items,
  totalAmount,
  userData,
  ...props
}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleCheckout = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.phoneNumber === "" ||
      userData.address === ""
    ) {
      toastWarning("Заполните все поля");
      return;
    }
    if (user) {
      createOrder(user.uid, items, totalAmount, userData, navigate);
    } else {
      toastInfo("Пожалуйста, войдите в аккаунт, чтобы оформить заказ.");
    }
  };

  return (
    <button onClick={handleCheckout} {...props}>
      Оформить заказ
    </button>
  );
};

export default CheckoutButton;

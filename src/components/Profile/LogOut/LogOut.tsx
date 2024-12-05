import { signOut } from "firebase/auth";
import { useAppDispatch } from "../../../store/hooks";
import { clearUser } from "../../../store/slices/authSlice";
import { auth } from "../../../config/firebaseConfig";

export const LogOut = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  return (
    <div>
      <h2>Вы уверенны что хотите выйти?</h2>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

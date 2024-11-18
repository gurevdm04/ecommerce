import { signOut } from "firebase/auth";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import { clearUser } from "../../../store/slices/authSlice";
import { auth } from "../../../config/firebaseConfig";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  preferences: {
    currency: string;
    language: string;
  };
}

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

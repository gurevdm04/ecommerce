import { IconType } from "react-icons";
import style from "./Profile.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineLockClock } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { Wrapper } from "../Wrapper/Wrapper";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { clearUser } from "../../store/slices/authSlice";
import { RootState } from "../../store/store";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    if (confirm("Вы уверенны что хотите выйти?")) {
      try {
        await signOut(auth);
        dispatch(clearUser());
      } catch (error) {
        console.error("Ошибка при выходе:", error);
      }
    }
  };

  if (isLoading) {
    return "loading";
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.list}>
          <Item Icon={MdOutlineLockClock} label="История заказов" isActive />
          <Item Icon={MdFavoriteBorder} label="Избранные товары" />
          <Item Icon={CiUser} label="Личные данные" />
          <Item Icon={IoMdExit} label="Выйти" click={handleLogout} />
        </div>
        <div>
          <h2>История заказов</h2>
          <p>{user?.email}</p>
          <p>{user?.uid}</p>
        </div>
      </div>
    </Wrapper>
  );
};

interface ItemProps {
  Icon: IconType;
  label: string;
  isActive?: boolean;
  click?: () => void;
}

const Item: React.FC<ItemProps> = ({ Icon, label, isActive, click }) => (
  <div onClick={click} className={`${style.item} ${isActive && style.active}`}>
    <Icon fontSize={30} />
    {label}
  </div>
);

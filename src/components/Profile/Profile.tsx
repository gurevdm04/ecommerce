import { IconType } from "react-icons";
import style from "./Profile.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineLockClock } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { Wrapper } from "../Wrapper/Wrapper";

export const Profile = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.list}>
          <Item Icon={MdOutlineLockClock} label="История заказов" isActive />
          <Item Icon={MdFavoriteBorder} label="Избранные товары" />
          <Item Icon={CiUser} label="Личные данные" />
          <Item Icon={IoMdExit} label="Выйти" />
        </div>
        <div>
          <h2>История заказов</h2>
        </div>
      </div>
    </Wrapper>
  );
};

interface ItemProps {
  Icon: IconType;
  label: string;
  isActive?: boolean;
}

const Item: React.FC<ItemProps> = ({ Icon, label, isActive }) => (
  <div className={`${style.item} ${isActive && style.active}`}>
    <Icon fontSize={30} />
    {label}
  </div>
);

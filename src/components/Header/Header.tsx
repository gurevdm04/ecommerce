import style from "./Header.module.scss";
import logoImg from "./../../assets/images/logo.png";

import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    <div className={style.wrap}>
      <div className={style.logo}>
        <img src={logoImg} alt="logo" />
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={style.icons}>
        <FaRegUser />
        <FiSearch />
        <FaRegHeart />
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
};

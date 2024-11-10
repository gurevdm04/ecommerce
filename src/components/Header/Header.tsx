import style from "./Header.module.scss";
import logoImg from "./../../assets/images/logo.png";

import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";
import React from "react";
import { ROUTES } from "../../constants/routes";

export const Header = () => {
  return (
    <Wrapper>
      <div className={style.wrap}>
        <div className={style.logo}>
          <img src={logoImg} alt="logo" />
        </div>
        <nav className={style.nav}>
          <ul>
            <LinkItem label="Home" to={ROUTES.HOME} />
            <LinkItem label="Shop" to={ROUTES.SHOP} />
            <LinkItem label="Contact" to={ROUTES.CONTACT} />
          </ul>
        </nav>
        <div className={style.icons}>
          <FaRegUser />
          <FiSearch />
          <FaRegHeart />
          <MdOutlineShoppingCart />
        </div>
      </div>
    </Wrapper>
  );
};

interface LinkItem {
  to: string;
  label: string;
}

const LinkItem: React.FC<LinkItem> = ({ label, to }) => (
  <li>
    <Link to={to}>{label}</Link>
  </li>
);

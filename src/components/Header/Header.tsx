import style from "./Header.module.scss";
import logoImg from "./../../assets/images/logo.png";

import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ROUTES } from "../../constants/routes";
import { RegistrationModal } from "../RegistrationModal/RegistrationModal";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

export const Header = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <div className={style.wrap}>
          <Link to={ROUTES.HOME} className={style.logo}>
            <img src={logoImg} alt="logo" />
          </Link>
          <nav className={style.nav}>
            <ul>
              <LinkItem label="Home" to={ROUTES.HOME} />
              <LinkItem label="Shop" to={ROUTES.SHOP} />
              <LinkItem label="Contact" to={ROUTES.CONTACT} />
            </ul>
          </nav>
          <div className={style.icons}>
            {isAuthenticated ? (
              <Link to={ROUTES.PROFILE}>
                <FaRegUser />
              </Link>
            ) : (
              <span onClick={openModal}>
                <FaRegUser />
              </span>
            )}

            <Link to={ROUTES.CART}>
              <MdOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </Wrapper>
      {isModalOpen && <RegistrationModal closeModal={closeModal} />}
    </>
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

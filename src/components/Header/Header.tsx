import style from "./Header.module.scss";
import logoImg from "./../../assets/images/logo.png";

import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Wrapper } from "../Wrapper/Wrapper";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../../constants/routes";
import { RegistrationModal } from "../RegistrationModal/RegistrationModal";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export const Header = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Очистка стиля при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Wrapper>
        <header className={style.wrap}>
          <Link to={ROUTES.HOME} className={style.logo}>
            <img src={logoImg} alt="logo" />
          </Link>
          <div className={style.wrapItem}>
            <Nav />
          </div>
          <div className={style.wrapItem}>
            <Icons isAuthenticated={isAuthenticated} openModal={openModal} />
          </div>
          <div className={style.hamburger}>
            <HiMenuAlt2 fontSize={32} onClick={() => setIsMenuOpen(true)} />
          </div>
        </header>
      </Wrapper>
      {isModalOpen && <RegistrationModal closeModal={closeModal} />}
      {isMenuOpen && (
        <div className={style.asideMenu}>
          <div className={style.asideMenuWrap}>
            <div
              className={style.asideMenuClose}
              onClick={() => setIsMenuOpen(false)}
            >
              <MdClose fontSize={32} />
            </div>
            <Nav />
            <Icons isAuthenticated={isAuthenticated} openModal={openModal} />
          </div>
        </div>
      )}
    </>
  );
};

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <LinkItem label="Home" to={ROUTES.HOME} />
      <LinkItem label="Shop" to={ROUTES.SHOP} />
      <LinkItem label="Contact" to={ROUTES.CONTACT} />
    </ul>
  </nav>
);

interface IconsProps {
  isAuthenticated: boolean;
  openModal: () => void;
}
const Icons: React.FC<IconsProps> = ({ isAuthenticated, openModal }) => (
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
);

interface LinkItem {
  to: string;
  label: string;
}

const LinkItem: React.FC<LinkItem> = ({ label, to }) => (
  <li>
    <Link to={to}>{label}</Link>
  </li>
);

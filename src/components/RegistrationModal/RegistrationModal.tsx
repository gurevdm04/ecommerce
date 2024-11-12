import style from "./RegistrationModal.module.scss";

import { IoMdCloseCircle } from "react-icons/io";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

interface RegistrationModalProps {
  openModal: () => void;
  closeModal: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  closeModal,
  openModal,
}) => {
  return (
    <div className={style.wrap}>
      <div className={style.modal}>
        <span onClick={closeModal} className={style.closeBtn}>
          <IoMdCloseCircle />
        </span>
        <h2 className={style.title}>Login here</h2>
        <p className={style.subtitle}>Welcome back!</p>
        <LoginForm />
        <button className={style.btnWhite}>Create new account</button>
        <p className={style.text}>or continue wuth</p>
        <div className={style.another}>
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaApple />
          </a>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <>
    <input placeholder="Email" type="text" />
    <input placeholder="Password" type="text" />
    <button className={style.btn}>Sign in</button>
    <a href="#"></a>
  </>
);

const RegisterForm = () => (
  <>
    <input type="text" />
    <input type="text" />
    <button className={style.btn}>Sign up</button>
    <a href="#"></a>
  </>
);

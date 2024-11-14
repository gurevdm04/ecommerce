import style from "./RegistrationModal.module.scss";

import { IoMdCloseCircle } from "react-icons/io";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

interface RegistrationModalProps {
  closeModal: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  closeModal,
}) => {
  const [isLogin, setIsLogin] = useState(true);

  const isAuthenticated = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const closeBtnRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (closeBtnRef.current) {
      console.log(isAuthenticated);

      if (isAuthenticated) {
        closeBtnRef.current.click();
      }
    }
  }, [isAuthenticated]);

  return (
    <div className={style.wrap}>
      <div className={style.modal}>
        <span ref={closeBtnRef} onClick={closeModal} className={style.closeBtn}>
          <IoMdCloseCircle />
        </span>
        <h2 className={style.title}>
          {isLogin ? "Login here" : "Register here"}
        </h2>
        <p className={style.subtitle}>
          {isLogin ? "Welcome back!" : "New User!"}
        </p>
        {isLogin ? <SignIn /> : <SignUp />}

        <button
          onClick={() => setIsLogin((prev) => !prev)}
          className={style.btnWhite}
        >
          {isLogin ? "Create new account" : "Login here"}
        </button>
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("createUser DATA:", user);
          alert("Регистрация прошла успешно");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("createUser ERROR:", errorCode, errorMessage);
        });
    } catch (error) {
      console.log("catch ERROR", error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="text"
        required
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="text"
        required
      />
      <button className={style.btn}>Sign up</button>
    </form>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          console.log("signIn DATA:", user);
          alert("Вы вошли");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("createUser ERROR:", errorCode, errorMessage);
        });
    } catch (error) {
      console.log("catch ERROR", error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="text"
        required
      />
      <button className={style.btn}>Sign in</button>
    </form>
  );
};

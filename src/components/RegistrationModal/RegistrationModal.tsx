import style from "./RegistrationModal.module.scss";

import { IoMdCloseCircle } from "react-icons/io";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config/firebaseConfig";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarning,
} from "../../toastify/Toastify";

const Loader = () => {
  return (
    <div className={style.loader}>
      <LoadingSpinner />
    </div>
  );
};

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
      if (isAuthenticated) {
        closeBtnRef.current.click();
      }
    }
  }, [isAuthenticated]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      toastError("Ошибка при вхоже в google аккаунт");
      console.error(errorCode, errorMessage, email, credential);
    });
  };

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
          <span onClick={signInWithGoogle}>
            <FaGoogle />
          </span>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toastWarning("Пароли не совпадают");
      return;
    }

    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toastSuccess("Регистрация прошла успешно");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toastError("Ошибка при регистрации");
          console.error(errorCode, errorMessage);
        });
    } catch (error) {
      toastError("Ошибка при регистрации");
      console.error(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      {isLoading && <Loader />}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
        required
      />
      <InputPassword
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <InputPassword
        password={confirmPassword}
        setPassword={setConfirmPassword}
        showPassword={showConfirmPassword}
        setShowPassword={setShowConfirmPassword}
      />
      <button className={style.btn}>Sign up</button>
    </form>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toastInfo("Вы вошли");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toastError("Ошибка прм входе");
          console.error(errorCode, errorMessage);
        });
    } catch (error) {
      toastError("Ошибка прм входе");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      {isLoading && <Loader />}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
        required
      />
      <InputPassword
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <button className={style.btn}>Sign in</button>
    </form>
  );
};

interface InputPasswordProps {
  password: string;
  setPassword: (value: React.SetStateAction<string>) => void;
  showPassword: boolean;
  setShowPassword: (value: React.SetStateAction<boolean>) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <span className={style.password}>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type={`${showPassword ? "string" : "password"}`}
        required
      />
      <div
        className={style.showPassword}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <IconContext.Provider value={{ className: `${style.passwordIcon}` }}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </IconContext.Provider>
      </div>
    </span>
  );
};

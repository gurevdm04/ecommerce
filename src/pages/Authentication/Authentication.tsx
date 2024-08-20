import { useState } from "react";
import style from "./Authentication.module.scss";
import { Input } from "./Input/Input";
import { Signup } from "./Signup/Signup";
import { Login } from "./Login/Login";

export const Authentication = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [type, setType] = useState<"signup" | "login">("signup");

  return (
    <div className={style.wrap}>
      <div>
        <Signup />
        {/* <Login /> */}
      </div>
      <div className={style.center}>
        <img className={style.img} src="/public/bg.jpg" alt="" />
      </div>
    </div>
  );
};

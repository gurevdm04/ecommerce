import { Button } from "../../../components/Button/Button";
import { Input } from "../Input/Input";
import style from "./../Authentication.module.scss";

export const Login = () => {
  return (
    <>
      <form action="">
        <h2 className={style.title}>Signup</h2>
        <p className={style.subtitle}>
          Do not have an account, <a href="#">create a new one.</a>.
        </p>
        <div className={style.data}>
          <Input
            text="Enter Your Email or Phone"
            placeholder="michael.joe@xmail.com"
          />
          <Input text="Enter Your Password" placeholder="******" />
        </div>

        <Button text="Create Account" />
        <a href=""></a>
      </form>
    </>
  );
};

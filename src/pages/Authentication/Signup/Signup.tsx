import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../../../components/Button/Button";
import style from "./../Authentication.module.scss";

export const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <form action="">
        <h2 className={style.title}>Signup</h2>
        <p className={style.subtitle}>
          Already Have An Account, <a href="#">Login</a>.
        </p>
        <div className={style.data}>
          <Input text="Full name" placeholder="michael joe" />
          <Input text="Email" placeholder="michael.joe@xmail.com" />
          <Input text="Password" placeholder="******" />
          <Input text="Confirm Password" placeholder="******" />
        </div>
        <div className={style.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I have read and agreed to the Terms of Service and Privacy Policy
          </label>
        </div>
        <Button text="Create Account" />
      </form>
    </>
  );
};

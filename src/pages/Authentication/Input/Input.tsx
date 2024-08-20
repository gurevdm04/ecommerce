import React, { useState } from "react";
import style from "./Input.module.scss";

interface Props {
  text: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ text, placeholder }) => {
  return (
    <>
      <p className={style.text}>{text}</p>
      <input className={style.input} placeholder={placeholder} />
    </>
  );
};

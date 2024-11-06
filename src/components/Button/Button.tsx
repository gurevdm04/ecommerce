import React from "react";
import style from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className,
  ...props
}) => {
  return (
    <button className={`${style.btn} ${className}`} {...props}>
      {label || children}
    </button>
  );
};

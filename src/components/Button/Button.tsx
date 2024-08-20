import style from "./Button.module.scss";

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return <button className={style.btn}>{text}</button>;
};

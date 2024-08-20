import style from "./Input.module.scss";

interface Props {
  placeholder: string;
}

export const Input: React.FC<Props> = ({ placeholder }) => {
  return <input placeholder={placeholder} className={style.input} />;
};

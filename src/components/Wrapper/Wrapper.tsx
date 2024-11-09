import style from "./Wrapper.module.scss";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={style.wrap}>{children}</div>;
};

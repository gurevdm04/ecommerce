import mainStyle from "./Counter.module.scss";

export const Counter = () => {
  return (
    <div className={mainStyle.wrap}>
      <button className={mainStyle.btn}>-</button>
      <p className={mainStyle.number}>1</p>
      <button className={mainStyle.btn}>+</button>
    </div>
  );
};

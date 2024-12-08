import style from "./Counter.module.scss";

export const Counter = () => {
  return (
    <div className={style.counter}>
      <button>-</button>
      <p>1</p>
      <button>+</button>
    </div>
  );
};

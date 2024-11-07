import style from "./Pagination.module.scss";

export const Pagination = () => {
  console.log(style);

  return (
    <div className={style.wrap}>
      <button className={style.active}>1</button>
      <button>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  );
};

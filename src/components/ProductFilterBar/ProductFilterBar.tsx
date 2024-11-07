import style from "./ProductFilterBar.module.scss";

export const ProductFilterBar = () => {
  return (
    <div className={style.wrap}>
      <div className="container">
        <div></div>
        <div>
          <div>
            <p>Show</p>
            <input type="number" />
          </div>
          <div>
            <p>Short by</p>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

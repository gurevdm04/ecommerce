import style from "./Loader.module.scss";
import { MagnifyingGlass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={style.loadingWrap}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#edff7f"
        color="#b88e2f"
      />
    </div>
  );
};

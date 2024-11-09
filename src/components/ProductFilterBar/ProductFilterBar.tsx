import style from "./ProductFilterBar.module.scss";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Wrapper } from "../Wrapper/Wrapper";

export const ProductFilterBar = () => {
  return (
    <div className={style.wrap}>
      <Wrapper>
        <div className={style.container}>
          <div className={style.setting}>
            <HiAdjustmentsHorizontal />
            Filter
            <HiMiniSquares2X2 />
            <HiOutlineQueueList />| Showing 1–16 of 32 results
          </div>
          <div className={style.filter}>
            <p>Show</p>
            <input type="text" placeholder="16" />
            <p>Short by</p>
            <input type="text" placeholder="Default" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

import style from "./InputSearchItem.module.scss";
import { IoSearch } from "react-icons/io5";

interface Props {
  text: string;
}

export const InputSearchItem: React.FC<Props> = ({ text }) => {
  return (
    <div className={style.wrap}>
      <input
        className={style.input}
        value={text}
        type="text"
        placeholder="Search An Item"
      />
      <div className={style.search}>
        <IoSearch className={style.iconSearch} />
      </div>
    </div>
  );
};

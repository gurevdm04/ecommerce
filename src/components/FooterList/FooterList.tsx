import { Link } from "react-router-dom";
import style from "./FooterList.module.scss";

type items = {
  text: string;
  path: string;
}[];

interface FooterListProps {
  title: string;
  items: items;
}

export const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {items.map(({ text, path }) => (
          <Item key={path} text={text} path={path} />
        ))}
      </ul>
    </div>
  );
};

interface ItemProps {
  text: string;
  path: string;
}

const Item: React.FC<ItemProps> = ({ text, path }) => {
  return (
    <li className={style.item}>
      <Link to={path} className={style.link}>
        {text}
      </Link>
    </li>
  );
};

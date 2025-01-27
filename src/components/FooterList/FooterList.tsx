import { Link } from "react-router-dom";
import style from "./FooterList.module.scss";

type items = {
  text: string;
  path: string;
}[];

interface FooterListProps {
  title: string;
  items: items;
  isA?: boolean;
}

export const FooterList: React.FC<FooterListProps> = ({ title, items, isA }) => {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {items.map(({ text, path }) => (
          <Item key={path + text} text={text} path={path} isA={isA} />
        ))}
      </ul>
    </div>
  );
};

interface ItemProps {
  text: string;
  path: string;
  isA?: boolean;
}

const Item: React.FC<ItemProps> = ({ text, path, isA }) => {
  return (
    <li className={style.item}>
      {isA ? (
        <a href={path} className={style.link}>
          {text}
        </a>
      ) : (
        <Link to={path} className={style.link}>
          {text}
        </Link>
      )}
    </li>
  );
};

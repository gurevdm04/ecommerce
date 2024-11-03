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
  console.log(items);

  return (
    <div className={style.wrap}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {items.map(({ text, path }) => (
          <Item text={text} path={path} />
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
      <a href={path} className={style.link}>
        {text}
      </a>
    </li>
  );
};

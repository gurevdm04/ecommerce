import mainStyle from "./HeaderButton.module.scss";

interface Props {
  text: string;
  link: string;
}

export const HeaderButton: React.FC<Props> = ({ text, link }) => {
  return (
    <a href={link} className={mainStyle.button}>
      {text}
    </a>
  );
};

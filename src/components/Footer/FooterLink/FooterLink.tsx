interface Props {
  text: string;
  link: string;
}

export const FooterLink: React.FC<Props> = ({ text, link }) => {
  return (
    <li style={{ marginTop: "10px" }}>
      <a href={link}>{text}</a>
    </li>
  );
};

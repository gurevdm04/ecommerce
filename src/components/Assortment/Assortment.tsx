import style from "./Assortment.module.scss";

import img from "./../../assets/images/assortment.jpg";
import img2 from "./../../assets/images/assortment2.png";
import img3 from "./../../assets/images/assortment3.png";
import { Wrapper } from "../Wrapper/Wrapper";

export const Assortment = () => {
  return (
    <Wrapper>
      <h2 className={style.title}>Просмотрите Ассортимент</h2>
      <p className={style.subtitle}>
        Благодарим вас за проявленный интерес к нашей компании и добро пожаловать
        в нашу компанию.
      </p>
      <div className={style.row}>
        <Item img={img} label="Обеденный" />
        <Item img={img2} label="Живущий" />
        <Item img={img3} label="Спальня" />
      </div>
    </Wrapper>
  );
};

interface ItemProps {
  label: string;
  img: string;
}

const Item: React.FC<ItemProps> = ({ img, label }) => (
  <div className={style.item}>
    <img className={style.img} src={img} alt={label} />
    <p className={style.text}>{label}</p>
  </div>
);

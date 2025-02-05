import style from "./Contact.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";

import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ContactForm } from "../ContactForm/ContactForm";

export const Contact = () => {
  return (
    <Wrapper>
      <h2 className={style.title}>Свяжитесь С Нами</h2>
      <p className={style.subtitle}>
        Для Получения Дополнительной Информации О Наших Продуктах И Услугах.
        Пожалуйста, Не Стесняйтесь , Пишите Нам По Электронной Почте. Наши
        Сотрудники Всегда Готовы Помочь Вам. не Колебаться!
      </p>
      <div className={style.content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Wrapper>
  );
};

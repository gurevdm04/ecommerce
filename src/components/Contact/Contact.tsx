import style from "./Contact.module.scss";

import { Wrapper } from "../Wrapper/Wrapper";

import { ContactInfo } from "../ContactInfo/ContactInfo";
import { ContactForm } from "../ContactForm/ContactForm";

export const Contact = () => {
  return (
    <Wrapper>
      <h2 className={style.title}>Get In Touch With Us</h2>
      <p className={style.subtitle}>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className={style.content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Wrapper>
  );
};

import style from "./Contact.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";

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
        <div className={style.info}>
          <div className={style.item}>
            <div className={style.icon}>
              <FaLocationDot />
            </div>
            <div>
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.icon}>
              <FaPhone />
            </div>
            <div>
              <h3>Phone</h3>
              <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.icon}>
              <MdAccessTimeFilled />
            </div>
            <div>
              <h3>Working Time</h3>
              <p>
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className={style.form}>
          <h4>Your name</h4>
          <input type="text" />
          <h4>Email address</h4>
          <input type="text" />
          <h4>Subject</h4>
          <input type="text" />
          <h4>Message</h4>
          <textarea name="" id=""></textarea>
          <br />
          <Button label="Submit" />
        </div>
      </div>
    </Wrapper>
  );
};

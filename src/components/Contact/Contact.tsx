import style from "./Contact.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { Button } from "../Button/Button";
import { Wrapper } from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${
  import.meta.env.VITE_TELEGRAM_BOT_TOKEN
}/sendMessage`;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Подготавливаем текст сообщения для Telegram
      const message = `
        Новый запрос с сайта:
        - Имя: ${formData.name}
        - Email: ${formData.email}
        - Сообщение: ${formData.message}
      `;

      // Отправляем данные на Telegram
      await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Не удалось отправить сообщение. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000); // 2 секунды

    return () => clearTimeout(timer);
  }, [isSuccess]);

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
        <form onSubmit={handleSubmit} className={style.form}>
          <fieldset disabled={isLoading}>
            <div>
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Сообщение:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {isLoading && (
              <Oval
                visible={true}
                height="40"
                width="40"
                color="#b88e2f"
                ariaLabel="oval-loading"
                wrapperClass={style.loader}
                secondaryColor="#b88e2f"
              />
            )}

            {isSuccess && <p>Сообщение отправлено успешно!</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button label="Submit" />
          </fieldset>
        </form>
      </div>
    </Wrapper>
  );
};

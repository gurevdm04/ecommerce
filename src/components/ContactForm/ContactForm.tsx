import style from "./ContactForm.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { Button } from "../Button/Button";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${
  import.meta.env.VITE_TELEGRAM_BOT_TOKEN
}/sendMessage`;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const ContactForm = () => {
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
          <label htmlFor="email">Почта:</label>
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
        <Button label="Отправить" />
      </fieldset>
    </form>
  );
};

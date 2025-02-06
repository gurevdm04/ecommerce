import React, { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import style from "./PersonalInformation.module.scss";
import { BallTriangle } from "react-loader-spinner";
import { Loader } from "../Loader/Loader";
import { toastError, toastSuccess } from "../../../toastify/Toastify";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const PersonalInformation = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingData, setUpdatingData] = useState(false);

  const fetchUserProfile = async () => {
    setUpdatingData(true);
    if (user) {
      const docRef = doc(db, "usersData", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      } else {
        // Заполняем начальные данные, если пользователь новый
        setProfile({
          name: "",
          email: user.email || "",
          phone: "",
          address: "",
        });
      }
      setLoading(false);
    }
    setUpdatingData(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [user]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => {
      if (!prev) return null;
      const keys = name.split(".");
      if (keys.length > 1) {
        return {
          ...prev,
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdatingData(true);
    if (!user || !profile) return;

    try {
      const docRef = doc(db, "usersData", user.uid);
      await setDoc(docRef, profile);
      toastSuccess("Данные успешно сохранены");
    } catch (error) {
      toastError("Ошибка при сохранении данных");
      console.error("Ошибка сохранения данных:", error);
    } finally {
      setUpdatingData(false);
    }
  };

  if (loading) return <Loader />;

  return (
    profile && (
      <form className={style.form} onSubmit={handleSubmit}>
        {updatingData ? (
          <div className={style.updatingData}>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#b88e2f"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass={style.updatingDataLoader}
              visible={true}
            />
          </div>
        ) : null}
        <fieldset disabled={updatingData}>
          <legend>
            <h2>Ваши данные</h2>
          </legend>
          <Label
            label="Имя:"
            type="text"
            name="name"
            value={profile.name}
            handle={handleInputChange}
          />
          <Label
            label="Email:"
            type="email"
            name="email"
            value={profile.email}
            handle={handleInputChange}
            readOnly={true}
          />
          <Label
            label="Телефон:"
            type="tel"
            name="phone"
            value={profile.phone}
            handle={handleInputChange}
          />

          <Label
            label="Адрес:"
            type="text"
            name="address"
            value={profile.address}
            handle={handleInputChange}
          />
          <button type="submit">Сохранить</button>
          <a className={style.resetForm} onClick={fetchUserProfile}>
            Сбросить
          </a>
        </fieldset>
      </form>
    )
  );
};

interface LabelProps {
  label: string;
  name: string;
  type: string;
  value: string;
  handle: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  readOnly?: boolean;
}
const Label: React.FC<LabelProps> = ({
  label,
  name,
  type,
  value,
  handle,
  readOnly,
}) => (
  <label>
    {label}
    <input
      type={type}
      name={name}
      value={value}
      onChange={handle}
      readOnly={readOnly}
    />
  </label>
);

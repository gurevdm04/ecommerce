import { IconType } from "react-icons";
import style from "./Profile.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineLockClock } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { Wrapper } from "../Wrapper/Wrapper";
import { useAppSelector } from "../../store/hooks";
import { auth } from "../../config/firebaseConfig";
import { RootState } from "../../store/store";
import { Navigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import { FeaturedProducts } from "./FeaturedProducts/FeaturedProducts";
import { PersonalInformation } from "./PersonalInformation/PersonalInformation";
import { LogOut } from "./LogOut/LogOut";
import { useEffect, useState } from "react";
import { isAdmin } from "../../utils";
import { AddProductForm } from "../AddProduct/AddProduct";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { AddCategory } from "./AddCategory/AddCategory";
import { BiCategory } from "react-icons/bi";
import { FaFolderClosed } from "react-icons/fa6";
import { AllProducts } from "./AllProducts/AllProducts";
import { FaListCheck } from "react-icons/fa6";
import { Orders } from "./Orders/Orders";

export const Profile = () => {
  const { user, isLoading } = useAppSelector((state: RootState) => state.auth);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      isAdmin(user.uid).then(setIsAdminUser);
    }
  }, [user]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <Tabs
        className={style.wrap}
        selectedTabClassName={style.active}
        selectedTabPanelClassName={style.tabPanel}
      >
        <TabList className={style.list}>
          <Tab className={style.item}>
            <Item Icon={MdOutlineLockClock} label="История заказов" />
          </Tab>
          <Tab className={style.item}>
            <Item Icon={MdFavoriteBorder} label="Избранные товары" />
          </Tab>
          <Tab className={style.item}>
            <Item Icon={CiUser} label="Личные данные" />
          </Tab>
          {isAdminUser && (
            <>
              <Tab className={style.item}>
                <Item Icon={IoIosAddCircleOutline} label="Добавление товара" />
              </Tab>
              <Tab className={style.item}>
                <Item Icon={BiCategory} label="Добавление категории" />
              </Tab>
              <Tab className={style.item}>
                <Item Icon={FaFolderClosed} label="Все товары" />
              </Tab>
              <Tab className={style.item}>
                <Item Icon={FaListCheck} label="Заказы" />
              </Tab>
            </>
          )}
          <Tab className={style.item}>
            <Item Icon={IoMdExit} label="Выйти" />
          </Tab>
        </TabList>
        <TabPanel>
          <OrderHistory />
        </TabPanel>
        <TabPanel>
          <FeaturedProducts />
        </TabPanel>
        <TabPanel>
          <PersonalInformation />
        </TabPanel>
        {isAdminUser && (
          <>
            <TabPanel>
              <AddProductForm />
            </TabPanel>
            <TabPanel>
              <AddCategory />
            </TabPanel>
            <TabPanel>
              <AllProducts />
            </TabPanel>
            <TabPanel>
              <Orders />
            </TabPanel>
          </>
        )}
        <TabPanel>
          <LogOut />
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

interface ItemProps {
  Icon: IconType;
  label: string;
}

const Item: React.FC<ItemProps> = ({ Icon, label }) => (
  <>
    <Icon fontSize={30} />
    {label}
  </>
);

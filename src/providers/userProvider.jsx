import React from "react";
import { getUserProfile } from "../services/profileService";
import auth from "../services/authService";
import UserAvatar from '../assets/svg/userAvatar'
import { toast } from 'react-toastify'

export const UserProviderContext = React.createContext();
export const ChangeUserProviderContext = React.createContext();
const initialState = {
  name: "",
  avatar: UserAvatar,
  gender: "",
  date_of_birth: "",
  email: "",
  mobile_number: null,
  introduction_link: ""
};

const initialUser = auth.getCurrentUser();

const UserProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState); //این هم بابت اینه که مقدار اولیه داشته باشیم و در صورت لاگین منو یدفعه تغییر نکند
  React.useEffect(() => {
    //برای اینکه وقتی توکن نداریم،دیگه درخواست دریافت اطلاعات کاربر رو نفرستیم
    if (initialUser || localStorage.getItem("token")) {
      getUserProfile().then(({ data }) => {
        setState(data);
      })
        .catch(() => {
          toast.error("خطای اتصال پیش آمده لطفا بعدا امتحان کنید");
        })
      // fetch("https://api.artin.app/accounts/user-details/", { method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify({ title: "Corrected post" }) }).then(response => { console.log(response.status); return response.json(); }).then(data => console.log(data));
    }
  }, []);

  return (
    <UserProviderContext.Provider value={state}>
      <ChangeUserProviderContext.Provider value={setState}>
        {children}
      </ChangeUserProviderContext.Provider>
    </UserProviderContext.Provider>
  );
};

export default UserProvider;

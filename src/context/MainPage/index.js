import { createContext, useState } from "react";
import api from "../../services/api";

export const HomePageContext = createContext();

const HomePageProvider = ({ children }) => {
  const [openModalListAds, setOpenModalListAds] = useState(false);
  const [openModalCreateAds, setOpenModalCreateAds] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegisterUser, setOpenModalRegisterUser] = useState(false);
  const [ token, setToken] = useState(false)

  const createUser = async (data) => {
    const userInfo = {
      ...data,
      country: "Brazil",
      is_active: true,
    };
    console.log(userInfo);

    const response = await api
      .post("users/", userInfo)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    if (response) {
      openModalRegisterUser(false);
    }
  };

  const loginUser = async (data) => {
    console.log(data);
    const response = await api
      .post("/users/login/", data)
      .then((res) =>  res)
      .catch((error) => console.log(error));

    if (response) {
      setOpenModalLogin(false);
      localStorage.setItem("userToken", JSON.stringify(response.data.access))
      localStorage.setItem("nickName", JSON.stringify(data.username))
      setToken(true)
    }
  };
  
  const logoutUser = () => {
    localStorage.clear()
    setToken(false)
  }

  const getWeekDays = async (data) => {
    const weekArr = [
      data.seg,
      data.ter,
      data.qua,
      data.qui,
      data.sex,
      data.sab,
      data.dom,
    ];
    const week_days = [];

    for (let i = 0; i < weekArr.length; i++) {
      if (weekArr[i] === true && i === 0) {
        week_days.push("mon");
      } else if (weekArr[i] === true && i === 1) {
        week_days.push("tue");
      } else if (weekArr[i] === true && i === 2) {
        week_days.push("wed");
      } else if (weekArr[i] === true && i === 3) {
        week_days.push("thu");
      } else if (weekArr[i] === true && i === 4) {
        week_days.push("fri");
      } else if (weekArr[i] === true && i === 5) {
        week_days.push("sat");
      } else if (weekArr[i] === true && i === 6) {
        week_days.push("sun");
      }
    }
    return week_days;
  };
  const registerAds = async (data, id) => {
    console.log(data);
    const weekDaysArray = await getWeekDays(data);
    const registerAdsData = {
      nickname: data.nameOrNickname,
      years_playing: data.experience,
      discord_user: data.discord,
      day_period: data.period,
      week_days: weekDaysArray,
    };

    console.log(registerAdsData);

    await api
      .post(`games/${id}/ads/`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const listAllGamesAds = async(id) => {
    console.log(id)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      key: "value"
   };
  
    
    await api
    .post(`games/${id}/ads/`, bodyParameters, config)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  }

  return (
    <HomePageContext.Provider
      value={{
        createUser,
        loginUser,
        registerAds,
        openModalListAds,
        setOpenModalListAds,
        openModalCreateAds,
        setOpenModalCreateAds,
        openModalLogin,
        setOpenModalLogin,
        openModalRegisterUser,
        setOpenModalRegisterUser,
        logoutUser,
        token,
        listAllGamesAds
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

import { createContext } from "react";
import api from "../../services/api";

export const HomePageContext = createContext();

const HomePageProvider = ({ children }) => {
  const createUser = async (data) => {
    const userInfo = {
      ...data,
      country: "Brazil",
      is_active: true,
    };
    console.log(userInfo);

    await api
      .post("users/", userInfo)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const loginUser = async (data) => {
    console.log(data);
      await api
        .post("/users/login/", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("userID", res.token); //revisar o caminho do token
        })
        .catch((error) => console.log(error));
  };

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
    console.log(data)
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

  return (
    <HomePageContext.Provider value={{ createUser, loginUser, registerAds }}>
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

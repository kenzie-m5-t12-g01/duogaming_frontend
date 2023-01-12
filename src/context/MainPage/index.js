import { createContext, useState } from "react";
import api from "../../services/api";
import { gamesList } from "../../database/games_list";

export const HomePageContext = createContext();

const HomePageProvider = ({ children }) => {
  const [openModalListAds, setOpenModalListAds] = useState(false);
  const [openModalCreateAds, setOpenModalCreateAds] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegisterUser, setOpenModalRegisterUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUsername] = useState('')
  const [gameList, setGameList] = useState();

  const createUser = async (data) => {
    const userInfo = {
      ...data,
      country: "Brazil",
      is_active: true,
    };
    console.log(userInfo);

    try {
       await api
        .post("users/", userInfo)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      
    } catch (error) {
      console.log(error)
    } finally {
      setOpenModalRegisterUser(false)

    }
  };

  const loginUser = async (data) => {
    const response = await api
      .post("/users/login/", data)
      .then((res) => res)
      .catch((error) => console.log(error));

    if (response) {
      setOpenModalLogin(false);
      localStorage.setItem("userToken", JSON.stringify(response.data.access));
      localStorage.setItem("nickName", JSON.stringify(data.username));
      setToken(response.data.access);
      setAuthenticated(true);
      setUsername(data.username)
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    setAuthenticated(false);
    setOpenModalListAds(false)
    setOpenModalCreateAds(false)
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
        week_days.push({day: "mon"});
      } else if (weekArr[i] === true && i === 1) {
        week_days.push({day: "tue"});
      } else if (weekArr[i] === true && i === 2) {
        week_days.push({day: "wed"});
      } else if (weekArr[i] === true && i === 3) {
        week_days.push({day: "thu"});
      } else if (weekArr[i] === true && i === 4) {
        week_days.push({day: "fri"});
      } else if (weekArr[i] === true && i === 5) {
        week_days.push({day: "sat"});
      } else if (weekArr[i] === true && i === 6) {
        week_days.push({day: "sun"});
      }
    }
    return week_days;
  };

  const findGameId = async (data) => {
    const gameId = await gamesList.find(e => e.title === data.gameName)
    if(gameId){
      return gameId
    }
    return console.log('game não foi encontrado')
  }
  const registerAds = async (data) => {
  
    const weekDaysArray = await getWeekDays(data);
    const registerAdsData = {
      nickname: data.nameOrNickname,
      years_playing: data.experience,
      discord_user: data.discord,
      day_period: data.period,
      week_days: weekDaysArray,
    };

    const gameId = await findGameId(data)

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    try {
      
      await api
        .post(`/games/${gameId.id}/ads/`, registerAdsData, config)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error)
    } finally{
      setOpenModalCreateAds(false)
    }
  };

  const listAllAdsByGameId =  async(id) => {

    const response = await api
      .get(`/games/${id}/ads/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res)
      .catch((error) => console.log(error))

      return setGameList(response.data.results)
  };

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
        authenticated,
        userName,
        listAllAdsByGameId,
        gameList
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageProvider;

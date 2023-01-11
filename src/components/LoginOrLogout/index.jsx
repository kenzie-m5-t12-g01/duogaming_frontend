import LoginOrLogoutStyle from "./styles";
import {BiLogIn} from 'react-icons/bi'
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function LoginOrLogout({setOpenModalLogin}) {
  
  const {token, logoutUser} = useContext(HomePageContext)

  return (
    <>
    <LoginOrLogoutStyle >
      <h2 onClick={()=>setOpenModalLogin(true)}>{`${token? 'Nickname': 'Entrar'}`}</h2>
      <BiLogIn onClick={()=>logoutUser()}/>
    </LoginOrLogoutStyle>
    </>
  );
}

export default LoginOrLogout
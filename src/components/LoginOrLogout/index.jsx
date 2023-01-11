import LoginOrLogoutStyle from "./styles";
import {BiLogIn} from 'react-icons/bi'
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function LoginOrLogout({setOpenModalLogin}) {
  
  const {authenticated, logoutUser} = useContext(HomePageContext)

  return (
    <>
    <LoginOrLogoutStyle >
      <h2 onClick={()=>setOpenModalLogin(true)}>{`${authenticated? 'Nickname': 'Entrar'}`}</h2>
      <BiLogIn onClick={()=>logoutUser()}/>
    </LoginOrLogoutStyle>
    </>
  );
}

export default LoginOrLogout
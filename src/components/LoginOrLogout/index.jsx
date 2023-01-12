import LoginOrLogoutStyle from "./styles";
import {BiLogIn} from 'react-icons/bi'
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function LoginOrLogout({setOpenModalLogin}) {
  
  const {authenticated, logoutUser, userName} = useContext(HomePageContext)

  return (
    <>
    <LoginOrLogoutStyle >
      <h2 onClick={()=> !authenticated && setOpenModalLogin(true)}>{`${authenticated? userName: 'Entrar'}`}</h2>
      <BiLogIn onClick={()=> logoutUser()}/>
    </LoginOrLogoutStyle>
    </>
  );
}

export default LoginOrLogout
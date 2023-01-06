import LoginOrLogoutStyle from "./styles";
import {BiLogIn} from 'react-icons/bi'

function LoginOrLogout({setOpenModalLogin}) {
  
  return (
    <LoginOrLogoutStyle onClick={()=>setOpenModalLogin(true)}>
      <h2>Entrar</h2>
      <BiLogIn/>
    </LoginOrLogoutStyle>
  );
}

export default LoginOrLogout
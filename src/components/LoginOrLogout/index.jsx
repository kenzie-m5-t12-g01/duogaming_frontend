import LoginOrLogoutStyle from "./styles";
import {BiLogIn} from 'react-icons/bi'

function LoginOrLogout() {
  return (
    <LoginOrLogoutStyle onClick={()=>''}>
      <h2>Entrar</h2>
      <BiLogIn/>
    </LoginOrLogoutStyle>
  );
}

export default LoginOrLogout
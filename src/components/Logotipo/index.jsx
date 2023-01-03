import LogotipoStyle from "./styles";
import logoTipo from '../../assets/images/home/logo.png'

function Logotipo() {
  return (
    <LogotipoStyle>
      <img src={logoTipo} alt="logotipo duogaming"/>
    </LogotipoStyle>
  );
}

export default Logotipo
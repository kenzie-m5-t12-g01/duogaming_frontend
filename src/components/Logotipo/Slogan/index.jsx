import SloganStyle from "./styles";
import slogan from '../../assets/images/home/slogan.png'

function SloganHome() {
  return (
    <SloganStyle>
      <img src={slogan} alt="logotipo duogaming"/>
    </SloganStyle>
  );
}

export default SloganHome
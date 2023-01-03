import BackgroundStyle from "./styles";
import background from '../../assets/images/home/background.png'



function BackgroundImage() {
  return (
    <BackgroundStyle>
      <img src={background} alt="logotipo duogaming"/>
    </BackgroundStyle>
  );
}

export default BackgroundImage
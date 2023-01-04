import { Link } from "react-router-dom";
import ModalCardsAdsStyle from "./styles";

function ModalCardsAds({ userAdInfo }) {
  return (
    <ModalCardsAdsStyle>
      <div>
        <span>Nome</span>
        <h2>{userAdInfo.userName}</h2>
        <span>Tempo de jogo</span>
        <h3>{userAdInfo.experience}</h3>
        <span>Disponibilidade</span>
        <h3>{userAdInfo.availability}</h3>
        <h4>{userAdInfo.weekDay.map((day, index, arr)=> arr.length !== index + 1 ? `${day}-`: day)}</h4>
        <span>Chamada de áudio?</span>
        <h4>{userAdInfo.voice}</h4>
      </div>
      <Link to={`/${userAdInfo.userName}`}>Ver perfil</Link>
    </ModalCardsAdsStyle>
  );
}

export default ModalCardsAds;

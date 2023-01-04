import ModalCardsAdsStyle from "./styles";
import {IoLogoGameControllerB} from 'react-icons/io'

function ModalCardsAds({ userAdInfo }) {
  return (
    <ModalCardsAdsStyle>
      <div>
        <span>Nome</span>
        <h2>{userAdInfo.userName}</h2>
        <span>Tempo de jogo</span>
        <h3>{userAdInfo.experience}</h3>
        <span>Disponibilidade</span>
        <h4>{userAdInfo.weekDay.map((day, index, arr)=> arr.length !== index + 1 ? `${day} / `: day)}</h4>
        <h3>das {userAdInfo.availability}</h3>
        <span>Chamada de áudio?</span>
        <h3>{userAdInfo.voice ? 'sim': 'não'}</h3>
      </div>
      {/* <Link to={`/${userAdInfo.userName}`}><IoLogoGameControllerB/>Conectar</Link> */} 
      {/* ###foi definido que não um user não pode acessar as info de outro - caso mudar, subistituir linha 21 pela 18*/}
      {/* perguntei para a Bruna terça dia 04-01 as 11:30hrs */}
      <a href={`${userAdInfo.contact}`} target="_blank" rel="noopener noreferrer"><IoLogoGameControllerB/>Conectar</a>
    </ModalCardsAdsStyle>
  );
}

export default ModalCardsAds;

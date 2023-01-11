import ModalCardsAdsStyle from "./styles";
import {IoLogoGameControllerB} from 'react-icons/io'

function ModalCardsAds({ userAdInfo }) {
  return (
    <ModalCardsAdsStyle>
      <div>
        <span>Nome</span>
        <h2>{userAdInfo.nickname}</h2>
        <span>Tempo de jogo</span>
        <h3>{userAdInfo.years_playing}</h3>
        <span>Disponibilidade</span>
        <h4>{userAdInfo.week_days.map((day, index, arr)=> arr.length !== index + 1 ? `${day.day} / `: day.day)}</h4>
        <h3>durante a {userAdInfo.day_period}</h3>
        <span>Chamada de áudio?</span>
        {/* <h3>{userAdInfo.voice ? 'sim': 'não'}</h3> */}
      </div>
      {/* <Link to={`/${userAdInfo.userName}`}><IoLogoGameControllerB/>Conectar</Link> */} 
      {/* ###foi definido que não um user não pode acessar as info de outro - caso mudar, subistituir linha 21 pela 18*/}
      {/* perguntei para a Bruna terça dia 04-01 as 11:30hrs */}
      <a href={`${userAdInfo.discord_user}`} target="_blank" rel="noopener noreferrer"><IoLogoGameControllerB/>Conectar</a>
    </ModalCardsAdsStyle>
  );
}

export default ModalCardsAds;

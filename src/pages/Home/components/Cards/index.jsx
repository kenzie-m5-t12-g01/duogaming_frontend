import { useContext } from "react";
import { HomePageContext } from "../../../../context/MainPage";
import CardStyle from "./styles";

function CardGame({ game, index, setOpenModalListAds }) {

  const {listAllGamesAds} = useContext(HomePageContext)

  const openGameList = (id) => {
    setOpenModalListAds(true)
    listAllGamesAds(id)
  }

  return (
    <>
      <CardStyle image={game.url} id={game.id} onClick={()=> openGameList(game.id)} about={`abrir anuncios do game ${game.title}`}> 
        <div>
          <h3>{game.title}</h3>
          <span>{game.genres}</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

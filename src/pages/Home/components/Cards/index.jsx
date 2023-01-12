import { useContext } from "react";
import { HomePageContext } from "../../../../context/MainPage";
import CardStyle from "./styles";

function CardGame({ game, index, setOpenModalListAds, setOpenModalCreateAds }) {

  const {listAllAdsByGameId, authenticated} = useContext(HomePageContext)

  const openGameList = async (id) => {
    try {
      await listAllAdsByGameId(id)
    } catch (error) {
      console.log(error)
    }finally{
      setOpenModalListAds(true)
      setOpenModalCreateAds(false)
    }
  }

  return (
    <>
      <CardStyle image={game.url} id={game.id} onClick={()=> authenticated && openGameList(game.id)} about={`abrir anuncios do game ${game.title}`}> 
        <div>
          <h3>{game.title}</h3>
          <span>{game.genres}</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

import CardStyle from "./styles";

function CardGame({ game, index, setOpenModalListAds }) {
  return (
    <>
      <CardStyle image={game.url} id={game.title} onClick={()=> setOpenModalListAds(true)} about={`abrir anuncios do game ${game.title}`}> 
        <div>
          <h3>{game.title}</h3>
          <span>{game.genres}</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

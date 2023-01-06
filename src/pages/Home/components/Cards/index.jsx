import CardStyle from "./styles";

function CardGame({ game, index, setOpenModalListAds }) {
  return (
    <>
      <CardStyle image={game.url} id={game.name} onClick={()=> setOpenModalListAds(true)} about={`abrir anuncios do game ${game.name}`}> 
        <div>
          <h3>{game.name}</h3>
          <span>4 jogadores</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

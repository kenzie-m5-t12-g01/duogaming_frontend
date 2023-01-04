import CardStyle from "./styles";

function CardGame({ game, index, setOpenModal }) {
  return (
    <>
      <CardStyle key={index} image={game.url} id={game.name} onClick={()=> setOpenModal(true)}>
        <div>
          <h3>{game.name}</h3>
          <span>4 jogadores</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

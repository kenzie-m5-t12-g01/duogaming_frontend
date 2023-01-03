import CardStyle from "./styles";

function CardGame({ game, index }) {
  return (
    <>
      <CardStyle key={index} image={game.url}>
        <div>
          <h3>{game.name}</h3>
          <span>4 jogadores</span>
        </div>
      </CardStyle>
    </>
  );
}

export default CardGame;

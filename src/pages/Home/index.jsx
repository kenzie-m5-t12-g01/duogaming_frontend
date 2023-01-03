import SloganHome from "../../components/Slogan";
import BackgroundImage from "../../components/Background";
import Logotipo from "../../components/Logotipo";
import HomeStyle from "./style";

// Database
import { gamesList } from "../../database/games_list";
import CardGame from "./components/Cards";
import { FaSearchPlus } from "react-icons/fa";

function HomePage() {
  return (
    <HomeStyle>
      <div>
        <BackgroundImage />
      </div>
      <div>
        <h1>Duogaming</h1>{" "}
        {/* <h1/> está invisivel - existe apenas para o rank de sites*/}
        <Logotipo />
      </div>
      <div>
        <SloganHome />
      </div>
      <section>
        {gamesList.map((game, index) => (
          <CardGame game={game} key={index} />
        ))}
      </section>
      <footer>
        <div>
          <div>
            <h2>Não encontrou seu duo?</h2>
            <span>Publique um anúncio para encontrar novos players!</span>
          </div>
          <div>
            <FaSearchPlus />
            <button>Publicar anúncio</button>
          </div>
        </div>
      </footer>
    </HomeStyle>
  );
}

export default HomePage;

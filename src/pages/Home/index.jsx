import SloganHome from "../../components/Slogan";
import BackgroundImage from "../../components/Background";
import Logotipo from "../../components/Logotipo";
import HomeStyle from "./style";

// Database
import { gamesList } from "../../database/games_list";

function HomePage() {
  return (
    <HomeStyle>
      <div>
        <BackgroundImage />
      </div>
      <div>
        <h1>Duogaming</h1>{" "} {/* <h1/> está invisivel - existe apenas para o rank de sites*/}
        <Logotipo />
      </div>
      <div>
        <SloganHome />
      </div>
      <section>
        {gamesList.map((e) => (
          <figure>
            <img src={e.image} alt={`Game ${e.name}`} />
            <h2>{e.name}</h2>
            <span>4 jogadores</span>
          </figure>
        ))}
      </section>
    </HomeStyle>
  );
}

export default HomePage;

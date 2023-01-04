import SloganHome from "../../components/Slogan";
import BackgroundImage from "../../components/Background";
import Logotipo from "../../components/Logotipo";
import HomeStyle from "./style";
import { FaSearchPlus } from "react-icons/fa";
import ModalListAds from "../../components/ModalListAds";

// Database
import { gamesList } from "../../database/games_list";
import CardGame from "./components/Cards";
import { useState } from "react";
import ModalCreateAds from "../../components/ModalListAds/components/ModalCreateAds";

function HomePage() {
  const [openModalListAds, setOpenModalListAds] = useState(false)
  const [openModalCreateAds, setOpenModalCreateAds] = useState(false)

  return (
    <>
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
            <CardGame game={game} key={index} setOpenModalListAds={setOpenModalListAds}/>
          ))}
        </section>
        <footer>
          <div>
            <div>
              <h2>Não encontrou seu duo?</h2>
              <span>Publique um anúncio para encontrar novos players!</span>
            </div>
            <div onClick={()=>{setOpenModalCreateAds(true)}} about='abrir menu de criação de anuncios'>
              <FaSearchPlus />
              <button>Publicar anúncio</button>
            </div>
          </div>
        </footer>
      </HomeStyle>
      {openModalListAds && <ModalListAds setOpenModalListAds={setOpenModalListAds}/>}
      {openModalCreateAds && <ModalCreateAds setOpenModalCreateAds={setOpenModalCreateAds}/>}
    </>
  );
}

export default HomePage;

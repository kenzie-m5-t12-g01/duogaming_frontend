// import { adsList } from "../../database/ads_list";
import ModalCardsAds from "./components/ModalListCardAds";
import ModalListAdsStyle from "./styles";
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function ModalListAds({game, setOpenModalListAds}) {

  const {gameList} = useContext(HomePageContext)
  console.log('ola')
  return (
    <ModalListAdsStyle> 
      {gameList.map((userInfo, index) => (
        <ModalCardsAds userAdInfo={userInfo} key={index}/>
      ))}
      <button onClick={() => setOpenModalListAds(false)} about='fechar lista de anuncios'><FaWindowClose/></button>
    </ModalListAdsStyle>
  );
}

export default ModalListAds;

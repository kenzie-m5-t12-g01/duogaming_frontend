import { adsList } from "../../database/ads_list";
import ModalCardsAds from "./components/ModalListCardAds";
import ModalListAdsStyle from "./styles";
import { FaWindowClose } from 'react-icons/fa'

function ModalListAds({game, setOpenModalListAds}) {
  return (
    <ModalListAdsStyle> 
      {adsList.map((user, index) => (
        <ModalCardsAds userAdInfo={user} key={index}/>
      ))}
      <button onClick={() => setOpenModalListAds(false)} about='fechar lista de anuncios'><FaWindowClose/></button>
    </ModalListAdsStyle>
  );
}

export default ModalListAds;

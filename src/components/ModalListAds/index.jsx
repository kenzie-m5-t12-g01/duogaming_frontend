import { adsList } from "../../database/ads_list";
import ModalListAdsStyle from "./styles";

function ModalListAds({game, setOpenModal}) {
  return (
    <ModalListAdsStyle> 
      {adsList.map((e) => <ModalListAds userAdInfo={adsList}/>)}
      <button onClick={() => setOpenModal(false)}>fechar</button>
    </ModalListAdsStyle>
  );
}

export default ModalListAds;

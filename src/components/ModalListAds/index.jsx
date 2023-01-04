import { adsList } from "../../database/ads_list";
import ModalCardsAds from "./components/CardListAds";
import ModalListAdsStyle from "./styles";

function ModalListAds({game, setOpenModal}) {
  return (
    <ModalListAdsStyle> 
      {adsList.map((user, index) => (
        <ModalCardsAds userAdInfo={user} key={index}/>
      ))}
      <button onClick={() => setOpenModal(false)}>x</button>
    </ModalListAdsStyle>
  );
}

export default ModalListAds;

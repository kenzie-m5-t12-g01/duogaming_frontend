import ModalCardsAdsStyle from "./styles";

function ModalCardsAds({userAdInfo}) {
  return (
    <ModalCardsAdsStyle> 
        <h2>{userAdInfo.userName}</h2>
        <h2>{userAdInfo.experience}</h2>
        <h2>{userAdInfo.availability}</h2>
        <h2>{userAdInfo.weekDay}</h2>
        <h2>{userAdInfo.voice}</h2> 
    </ModalCardsAdsStyle>
  );
}

export default ModalCardsAds;
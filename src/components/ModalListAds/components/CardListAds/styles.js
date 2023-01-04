import styled from 'styled-components';

const ModalCardsAdsStyle = styled.div`
    height: 280px;
    width: 180px;
    border-radius: 8px;
    padding: 10px;
    background-color: var(--Background-Grey);
    color: var(--fontColor-1);
    display: flex;
    flex-direction: column;

    div{
      height: 80%;
      span{
        color: var(--fontColor-2);
      }
    }

    a{
      height: fit-content;
      width: max-content;
      padding: 5px;
      align-self: center;
      border: 8px;
      text-decoration: none;
      color: var(--fontColor-1);
      background-color: var(--Violet);
    }
`;

export default ModalCardsAdsStyle;
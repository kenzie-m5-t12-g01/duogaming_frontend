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
        font-size: 16px;
        color: var(--fontColor-2);
      }
      h2{
        margin-bottom: 10px;
        font-size: 18px;
      }
      h3{
        font-size: 14px;
        margin-bottom: 10px;
      }
    }

    a{
      height: fit-content;
      width: max-content;
      padding: 5px;
      align-self: center;
      border: 8px;
      border-radius: 8px  ;
      text-decoration: none;
      color: var(--fontColor-1);
      background-color: var(--Violet);
      display: flex;
      gap: 1rem;
      svg{
        color: white;
        align-self: center;
      }
    }
`;

export default ModalCardsAdsStyle;
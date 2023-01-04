import styled from 'styled-components';

const ModalCreateAdsStyle = styled.section`
 position: fixed;
  z-index: 999;
  height: 80vh;
  width: 30vw;
  padding: 20px;
  border-radius: 8px;
  top: 10%;
  left: 35%;
  background-color: var(--Background-darkGrey );
  color: var(--fontColor-1);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-weight: 800;
    margin-bottom: 30px;
  }
  /*div:nth-child(2){  informações pessoais */
  /* width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
    label{
      cursor: pointer;
      margin-bottom: 10px;
      h3{
        font-size: 18px;
        line-height: 26px;
        margin-left: 10px;
      }
      input{
        width: 100%;
        color: var(--fontColor-1);
        background-color: var(--Background-Grey);
        padding: 5px 10px;
        box-sizing: border-box;
        border: 0;
        &::placeholder{ 
          color: var(--fontColor-placeholder);
          font-size: 14px;
        }
      }
    }   
  }*/

  /*div:nth-child(3){  experiência / contato */
  /* width: 90%;
  margin-bottom: 20px; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    div{
      width: 45%;
      h3{
        color: blue;
      }
      input{
        width: 100%;
        color: var(--fontColor-1);
        background-color: var(--Background-Grey);
        background-color: blue;
        box-sizing: border-box;
        border: 0;
       
      }
    } 
  }*/

  /*div:nth-child(4){  diase semanais / horário  */
  /* display: flex;
  flex-direction: column;
  width: 90%;
    h3{
      color: green;
    }
    div{
      display: flex;
      flex-direction: row;
      figure{

      }
    }
    input{
      background-color: green;
    } 
  }*/

  button{
    height: 30px;
    width: 30px;
    position: absolute;
    border: 0;
    top: 15px;
    right: 15px;
    background-color: var(--Background-darkGrey);
    svg{
      height: 30px;
      width: 30px;
      height: 100%;
      width: 100%;
      border: 0;
      color: var(--Violet);
    }
  }
`;

export default ModalCreateAdsStyle;
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
    margin-top: 50px;
    margin-bottom: 30px;
  }

  button:nth-child(1){
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
  form{
    display: flex;
    flex-direction: column;
    align-items: center;

    button:nth-last-child(1){
      height: 50px;
      width: fit-content;
      margin-top: 50px;
      padding: 12px 20px;
      border-radius: 6px;
      background-color: var(--Violet);

      font-size: 16px;
      color: var(--fontColor-1);
    }
  }
`;

export default ModalCreateAdsStyle;
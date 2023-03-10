import styled from "styled-components";

const ModalListAdsStyle = styled.section`
  position: fixed;
  z-index: 999;
  height: 80vh;
  width: 90vw;
  padding: 20px;
  border-radius: 8px;
  top: 10%;
  left: 5%;
  gap: 1rem;

  display: flex;
  flex-flow: row wrap;
  background-color: var(--Background-darkGrey);
 
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

export default ModalListAdsStyle;

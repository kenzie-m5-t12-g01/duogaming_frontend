import styled from "styled-components";

const HomeStyle = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    /* <BackgroundImage /> */
    height: 100vh;
    width: 100vw;
    z-index: -1;
    position: absolute;
  }
  div:nth-child(2) {
    /* <Logotipo /> */
    height: 160px;
    width: 260px;
    z-index: 10;
    margin: 20px auto;
    h1 {
      color: transparent;
    }
  }
  div:nth-child(3) {
    /* <SloganHome /> */
    margin: 70px auto 50px;
  }
  section {
    max-width: 80%;
      margin: 0 auto 10px;
      padding: 0;
      display: flex;
      gap: 1.8rem;
      
      overflow: scroll;
      overflow-y: hidden;
      /* &::-webkit-scrollbar {
        width: 20px;
        scrollbar-color: red;
        background-color: white; 
      } */
  }
  footer {
    height: 100px;
    width: 80%;
    padding-top: 5px;
    background-color: white;
    margin: 20px auto 10px;
    border-radius: 8px;
    background-image: linear-gradient(to right, #9572fc, #43e7ad, #e2d45c);
    div:nth-child(1) {
      height: inherit;
      width: inherit;
      padding: 10px;
      border-radius: 0 0 8px 8px;
      z-index: 1;
      background-color: var(--Background-darkGrey);
      display: flex;
      justify-content: space-between;

      div:nth-child(1) {
        margin: 0;
        height: auto;
        width: auto;
        padding-left: 20px;
        flex-direction: column;
        position: relative;
        h2 {
          color: var(--fontColor-1);
        }
        span {
          color: var(--fontColor-2);
        }
      }
      div:nth-last-child(1) {
        height: 50px;
        width: fit-content;
        position: relative;
        display: flex;
        align-self: center;
        align-items: center;
        margin: 0;
        padding: 5px;
        border-radius: 6px;
        gap: 1rem;
        background-color: var(--Violet);
        svg{
          color: var(--fontColor-1);
          height: 20px;
          width: 20px;
        }
        button {
          font-size: 16px;
          color: var(--fontColor-1);
          border-style:none;
          background-color: transparent;  
          z-index: 10;
        }
      }
    }
  }
`;

export default HomeStyle;

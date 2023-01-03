import styled from 'styled-components';

const HomeStyle = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  div:nth-child(1){ /* <BackgroundImage /> */
    height: 100vh;
    width: 100vw;
    z-index: -1;
    position: absolute;
  }
  div:nth-child(2){ /* <Logotipo /> */
    height: 300px;
    width: fit-content;
    z-index: 10;
    margin: auto auto 0;
    h1{
      color: transparent;
    }
  }
  div:nth-child(3){ /* <SloganHome /> */
    margin: 0 auto auto;
  }
  section{
    max-width: 80%;
    margin: 0 auto 50px;
    display: flex;
    gap: 1rem;
    
    overflow: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
            width: 20px;
            scrollbar-color: red;
            background-color: white;
    }
    figure{
      height: 240px;
      width: 180px;
      display: flex;

      img{
        z-index: -1;
      }
      h2{
        color: var(--White);
        min-width: 100%;
        margin: auto 20px 40px;
        position: relative;
        text-align: start;

        font-size: 16px;
      }
      span{
        color: var(--White);
        
        min-width: 100%;
        margin: auto 0 20px;
        position: relative;
        text-align: start;
      }
    }
  }
`;

export default HomeStyle;
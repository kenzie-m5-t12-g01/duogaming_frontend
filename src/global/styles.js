import { createGlobalStyle } from "styled-components";

const GlobalStyle  = createGlobalStyle`
    :root {
    --Color-primary:#FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;
    --White: #FFFFFF;
    --Violet: #8B5CF6;
    --Blue-1: rgb(25, 175, 230);
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;
    --GreySoft: #666666;
    --Background-darkGrey: #18181B; 
    --Background-Grey: #2A2634; 
    --Black: #0000000;
    --Sucess: #3FE864;
    --Negative: #E83F5B;
    --BorderColor: rgba(102, 102, 102, 1);
    --fontColor-1: #FFFFFF;
    --fontColor-2: #A1A1AA; 
    --fontWeight-Strong: 700;
    --fontWeight-Soft: 400;
    --fontInter: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;700&family=Inter:wght@100;200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;1,500&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

    font-size: 60%;   

    /* TESTE COM O CAMINHO DO DIRETÓRIO NÃO FUNCIONOU */
    /* --slide-1: url(../assets/images/games/Apex.png);
    --slide-2: url(../assets/images/games/CounterStrike.png);
    --slide-3: url(../assets/images/games/Dota2.png);
    --slide-4: url(../assets/images/games/Fortinite.png);
    --slide-5: url(../assets/images/games/LeagueOfLegends.png);
    --slide-6: url(../assets/images/games/WarCraft.png); */

    /* DIFERENTE DO MOSTRADO EM PESQUISA, SÓ FUNCIONOU COM LINK NA IMAGEM */
    --slide-1: url('https://farm66.staticflickr.com/65535/52604017917_2b55dfbdf2_m.jpg');
    --slide-2: url('https://farm66.staticflickr.com/65535/52604519421_c73afd7524_m.jpg');
    --slide-3: url('https://farm66.staticflickr.com/65535/52605024093_d370d6a7f6_m.jpg');
    --slide-4: url('https://farm66.staticflickr.com/65535/52604017847_95a9f678e0_m.jpg');
    --slide-5: url('https://farm66.staticflickr.com/65535/52604017857_9537827a82_m.jpg');
    --slide-6: url('https://farm66.staticflickr.com/65535/52605024113_23eec2f9cc_m.jpg');
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--fontInter);
  }

  body,html{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

export { GlobalStyle }
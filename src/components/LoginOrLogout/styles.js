import styled from 'styled-components';

const LoginOrLogoutStyle = styled.section`
  height: 50px;
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2{
   font-size: 1.8rem;
   color: var(--fontColor-1);
  }
  svg{
    height: 50px;
    width: 50px;
    color: var(--Violet);
  }
`;

export default LoginOrLogoutStyle;
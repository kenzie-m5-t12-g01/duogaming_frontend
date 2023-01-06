import styled from "styled-components";

const RegisterUserModalStyle = styled.section`
  position: fixed;
  z-index: 999;
  height: 50vh;
  width: 25vw;
  padding: 25px;
  border-radius: 8px;
  top: 25%;
  left: 37.5%;
  gap: 1rem;

  color: var(--fontColor-1);
  background-color: var(--Background-darkGrey);

  display: flex;
  flex-direction: column;
  align-items: center;

  button:nth-child(1) {
    height: 30px;
    width: 30px;
    border: none;
    background-color: var(--Background-darkGrey);
    position: absolute;
    top: 15px;
    right: 15px;
    svg {
      height: 100%;
      width: 100%;
      border: 0;
      color: var(--Violet);
    }
  }

  h2 {
    font-weight: 800;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap: 15px;
    label {
      width: 100%;
      h3 {
        width: 100%;
        font-size: 20px;
        font-weight: 20px;
        margin-left: 5px;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        padding: 5px;
        &::placeholder {
          /* doc para navegadores = https://www.w3schools.com/howto/howto_css_placeholder.asp */
          color: var(--fontColor-placeholder);
          font-size: 14px;
          text-align: center;
        }
      }
    }
    button {
      height: fit-content;
      width: fit-content;
      padding: 5px;
      border-radius: 8px;
      margin: 15px auto 0;
      color: var(--fontColor-1);
      background-color: var(--Violet);
    }
  }
`;

export default RegisterUserModalStyle;

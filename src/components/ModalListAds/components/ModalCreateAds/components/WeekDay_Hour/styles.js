import styled from "styled-components";

const WeekdayHourStyle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  div:nth-child(1) {
    width: 40%;
    h3 {
      font-size: 14px;
      line-height: 26px;
      white-space: nowrap;
    }
    div {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 0 2px;
      gap: 8px;
      div{
        width: fit-content;
        display: flex;
        flex-direction: column; 

        figure#seg {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorSeg}) => colorSeg ? 'var(--Violet)' : 'grey'};
        }
        figure#ter {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorTer}) => colorTer ? 'var(--Violet)' : 'grey'};
        }
        figure#qua {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorQua}) => colorQua ? 'var(--Violet)' : 'grey'};
        }
        figure#qui {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorQui}) => colorQui ? 'var(--Violet)' : 'grey'};
        }
        figure#sex {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorSex}) => colorSex ? 'var(--Violet)' : 'grey'};
        }
        figure#sab {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorSab}) => colorSab ? 'var(--Violet)' : 'grey'};
        }
        figure#dom {
          cursor: pointer;
          width: 20px;
          font-size: 14px;
          padding: 5px;
          /* implentar lógica de marcação */
          background-color: ${({colorDom}) => colorDom ? 'var(--Violet)' : 'grey'};
        }
        input{
          display: none;
        }
      }
    }
  }
  div:nth-child(2) {
    width: 40%;
    h3 {
      font-size: 14px;
      line-height: 26px;
      text-align: center;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      div {
        width: 40%;
        input {
          width: 100%;
          color: var(--fontColor-1);
          background-color: var(--Background-Grey);
          padding: 5px 10px;
          box-sizing: border-box;
          border: 0;
          &::placeholder {
            /* doc para navegadores = https://www.w3schools.com/howto/howto_css_placeholder.asp */
            color: var(--fontColor-placeholder);
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default WeekdayHourStyle;

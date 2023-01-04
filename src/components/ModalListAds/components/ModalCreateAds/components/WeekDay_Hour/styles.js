import styled from "styled-components";

const WeekdayHourStyle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:nth-child(1) {
    width: 48%;
    h3 {
      font-size: 14px;
      line-height: 26px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 5px;
      figure {
        padding: 3px;
        /* implentar lógica de marcação */
        background-color: var(--Violet);
      }
    }
  }
  div:nth-child(2) {
    width: 48%;
    h3 {
      font-size: 14px;
      line-height: 26px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
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

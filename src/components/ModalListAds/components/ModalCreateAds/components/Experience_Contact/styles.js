import styled from 'styled-components';

const ExperienceContactStyle = styled.div`
  width: 90%;
  margin-bottom: 20px; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
    div{
      width: 40%;
      label{
      cursor: pointer;
      margin-bottom: 10px;
        h3{
          font-size: 14px;
          line-height: 26px;
          margin-left: 5px;
          white-space: nowrap;
        }
        input{
          width: 100%;
          color: var(--fontColor-1);
          background-color: var(--Background-Grey);
          padding: 5px 10px;
          box-sizing: border-box;
          border: 0;
          &::placeholder{ /* doc para navegadores = https://www.w3schools.com/howto/howto_css_placeholder.asp */
            color: var(--fontColor-placeholder);
            font-size: 12px;
          }
        }
      }
    }
`;

export default ExperienceContactStyle;
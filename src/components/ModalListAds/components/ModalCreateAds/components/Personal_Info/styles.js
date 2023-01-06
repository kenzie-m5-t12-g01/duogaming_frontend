import styled from 'styled-components';

const PersonalInfoStyle = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
    label{
      cursor: pointer;
      margin-bottom: 10px;
      h3{
        font-size: 18px;
        line-height: 26px;
        margin-left: 10px;
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
          font-size: 14px;
        }
      }
    }
`;

export default PersonalInfoStyle;
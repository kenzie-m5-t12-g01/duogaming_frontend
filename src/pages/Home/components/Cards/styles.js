import styled from "styled-components";

const CardStyle = styled.figure`
  height: 200px;
  width: 160px;
  border-radius: 8px;
  background-image: var(${(image) => image.image});
  cursor: pointer;

  -webkit-box-shadow: inset 9px -129px 31px -23px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 9px -129px 31px -23px rgba(0,0,0,0.75);
  box-shadow: inset 9px -129px 31px -23px rgba(0,0,0,0.75);

  div:nth-child(1) {
    height: auto;
    width: auto;
    z-index: 1;
    margin-top: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3px;
    h3 {
      color: var(--White);
      text-align: center;
      font-size: 1.8rem;
    }
    span {
      align-self: center;
      width: fit-content;
      padding: 2px;
      font-size: 12px;
      font-weight: 800;
      color: white;
      border: 3px solid var(--Violet);
      background-color: black;
      border-radius: 5px;
      text-align: start;
      margin-left: 10px;
    }
  }
`;

export default CardStyle;

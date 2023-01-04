import PersonalInfoStyleStyle from "./styles";

function PersonalInfo() {
  return (
    <PersonalInfoStyleStyle>
      <label>
          <h3>Qual o game?</h3>
          <input type="text" placeholder="Selecione o game que deseja jogar"/>
        </label>
        <label>
          <h3>Seu nome (ou nickname)</h3>
          <input type="text" placeholder="Como te chamam dentro do game?"/>
        </label>
    </PersonalInfoStyleStyle>
  );
}

export default PersonalInfo;

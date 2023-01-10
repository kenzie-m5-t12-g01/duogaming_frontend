import PersonalInfoStyleStyle from "./styles";

function PersonalInfo({register}) {
  return (
    <PersonalInfoStyleStyle>
      <label>
          <h3>Qual o game?</h3>
          <select>
            <option value="League of Legends">League of Legends</option>
            <option value="Apex Legends">Apex Legends</option>
            <option selected value="Valorant">Valorant</option>
          </select>
        {/* https://reactjs.org/docs/forms.html  */}
        </label>
        <label>
          <h3>Seu nome (ou nickname)</h3>
          <input type="text" id="nameOrNickname"{...register("nameOrNickname")}  placeholder="Como te chamam dentro do game?"/>
        </label>
    </PersonalInfoStyleStyle>
  );
}

export default PersonalInfo;

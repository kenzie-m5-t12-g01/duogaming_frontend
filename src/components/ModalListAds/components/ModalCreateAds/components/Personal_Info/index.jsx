import PersonalInfoStyleStyle from "./styles";

function PersonalInfo({register}) {
  return (
    <PersonalInfoStyleStyle>
      <label>
          <h3>Qual o game?</h3>
          <input type="text" id="gameName" {...register("gameName")} placeholder="Selecione o game que deseja jogar"/>
        {/* <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        
        https://reactjs.org/docs/forms.html */}
        </label>
        <label>
          <h3>Seu nome (ou nickname)</h3>
          <input type="text" id="nameOrNickname"{...register("nameOrNickname")}  placeholder="Como te chamam dentro do game?"/>
        </label>
    </PersonalInfoStyleStyle>
  );
}

export default PersonalInfo;

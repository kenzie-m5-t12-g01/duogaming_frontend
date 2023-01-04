import ExperienceContactStyle from "./styles";

function ExperienceContact() {
  return (
    <ExperienceContactStyle>
      <div>
        <label>
          <h3>Joga há quantos anos?</h3>
          <input type="text" placeholder="Tudo bem ser ZERO :)"/>
        </label>
      </div>
      <div>
        <label>
          <h3>Qual seu Discord?</h3>
          <input type="text" placeholder="Usuario#0000"/>
        </label>
      </div>
    </ExperienceContactStyle>
  );
}

export default ExperienceContact;

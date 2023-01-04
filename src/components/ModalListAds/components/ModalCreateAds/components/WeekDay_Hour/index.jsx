import WeekdayHourStyle from "./styles";

function WeekdayHour() {
  return (
    <WeekdayHourStyle>
      <div>
        <h3>Quando costuma jogar?</h3>
        <div>
          <figure alt="seg" about="dias da semana - seg">S</figure>
          <figure alt="ter" about="dias da semana - ter">T</figure>
          <figure alt="qua" about="dias da semana - qua">Q</figure>
          <figure alt="qui" about="dias da semana - qui">Q</figure>
          <figure alt="sex" about="dias da semana - sex">S</figure>
          <figure alt="sab" about="dias da semana - sab">S</figure>
          <figure alt="dom" about="dias da semana - dom">D</figure>
        </div>
      </div>
      <div>
        <h3>Qual horário do dia?</h3>
        <div>
          <div>
            <label htmlFor="" about="disponibilidade hora de inicial">
              <input type="text"  placeholder="De"/>
            </label>
          </div>
          <div>
            <label htmlFor="" about="disponibilidade hora final" >
              <input type="text" placeholder="Até"/>
            </label>
          </div>
        </div>
      </div>
    </WeekdayHourStyle>
  );
}

export default WeekdayHour;

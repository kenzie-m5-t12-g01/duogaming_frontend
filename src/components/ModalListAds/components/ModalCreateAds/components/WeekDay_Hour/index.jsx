import { useState } from "react";
import WeekdayHourStyle from "./styles";

function WeekdayHour({register}) {
  const [colorSeg, setColorSeg] = useState(false)
  const [colorTer, setColorTer] = useState(false)
  const [colorQua, setColorQua] = useState(false)
  const [colorQui, setColorQui] = useState(false)
  const [colorSex, setColorSex] = useState(false)
  const [colorSab, setColorSab] = useState(false)
  const [colorDom, setColorDom] = useState(false)

  return (
    <WeekdayHourStyle colorSeg={colorSeg} colorTer={colorTer} colorQua={colorQua} colorQui={colorQui}
     colorSex={colorSex} colorSab={colorSab} colorDom={colorDom}>
      <div>
        <h3>Quando costuma jogar?</h3>
        <div>
          <div>
            <label>
              <figure alt="seg" about="dias da semana - seg" id="seg" onClick={() => setColorSeg(!colorSeg)}>seg</figure>
              <input type="checkbox" id="seg" {...register("seg")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="ter" about="dias da semana - ter" id="ter" onClick={() => setColorTer(!colorTer)}>ter</figure>
              <input type="checkbox" id="ter" {...register("ter")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="qua" about="dias da semana - qua" id="qua" onClick={() => setColorQua(!colorQua)}>qua</figure>
              <input type="checkbox" id="qua" {...register("qua")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="qui" about="dias da semana - qui" id="qui" onClick={() => setColorQui(!colorQui)}>qui</figure>
              <input type="checkbox" id="qui" {...register("qui")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="sex" about="dias da semana - sex" id="sex" onClick={() => setColorSex(!colorSex)}>sex</figure>
              <input type="checkbox" id="sex" {...register("sex")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="sab" about="dias da semana - sab" id="sab" onClick={() => setColorSab(!colorSab)}>sab</figure>
              <input type="checkbox" id="sab" {...register("sab")}/>
            </label>
          </div>

          <div>
            <label>
              <figure alt="dom" about="dias da semana - dom" id="dom" onClick={() => setColorDom(!colorDom)}>dom</figure>
              <input type="checkbox" id="dom" {...register("dom")}/>
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3>Qual horário do dia?</h3>
        <div>
          <div>
            <label htmlFor="" about="disponibilidade hora de inicial">
              <input type="text"  id="initialHour" {...register("initialHour")} placeholder="De"/>
            </label>
          </div>
          <div>
            <label htmlFor="" about="disponibilidade hora final" >
              <input type="text" id="finallHour" {...register("finallHour")} placeholder="Até"/>
            </label>
          </div>
        </div>
      </div>
    </WeekdayHourStyle>
  );
}

export default WeekdayHour;

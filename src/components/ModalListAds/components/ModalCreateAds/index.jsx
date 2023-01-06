import ModalCreateAdsStyle from "./styles";
import { FaWindowClose } from "react-icons/fa";
import ExperienceContact from "./components/Experience_Contact";
import PersonalInfo from "./components/Personal_Info";
import WeekdayHour from "./components/WeekDay_Hour";

// userform
import { useForm } from "react-hook-form";

function ModalCreateAds({ setOpenModalCreateAds }) {

  const {register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  })

  function registerAds (data){

    const weekArr = [data.seg, data.ter, data.qua, data.qui, data.sex, data.sab, data.dom]
    const week_days = []

    for (let i = 0; i < weekArr.length; i++){
      if(weekArr[i] === true && i === 0 ){
        week_days.push('seg')   
      }
      else if(weekArr[i] === true && i === 1 ){
        week_days.push('ter')
      }
      else if(weekArr[i] === true && i === 2 ){
        week_days.push('qua')
      }
      else if(weekArr[i] === true && i === 3 ){
        week_days.push('qui')
      }
      else if(weekArr[i] === true && i === 4 ){
        week_days.push('sex')
      }
      else if(weekArr[i] === true && i === 5 ){
        week_days.push('sab')
      }
      else if(weekArr[i] === true && i === 6 ){
        week_days.push('dom')
      }
    }
    console.log(week_days)
  }

  return (
    <ModalCreateAdsStyle>
      <button onClick={() => setOpenModalCreateAds(false)} about="fechar menu de criação de anuncios">
        <FaWindowClose />
      </button>
      <h2>Publique um anúncio</h2>
      <form action="" onSubmit={handleSubmit(registerAds)}>
        <PersonalInfo register={register}/> {/* informações pessoais */}
        <ExperienceContact register={register}/> {/* experiência / contato */}
        <WeekdayHour register={register}/>{/* dias semanais / horário  */}
        <button>Publicar</button>
      </form>
    </ModalCreateAdsStyle>
  );
}

export default ModalCreateAds;




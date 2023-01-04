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

  function registrarUsuario (data){
    console.log(data)
  }

  return (
    <ModalCreateAdsStyle>
      <button onClick={() => setOpenModalCreateAds(false)} about="fechar menu de criação de anuncios">
        <FaWindowClose />
      </button>
      <h2>Publique um anúncio</h2>
        <PersonalInfo/> {/* informações pessoais */}
        <ExperienceContact/> {/* experiência / contato */}
        <WeekdayHour/>{/* dias semanais / horário  */}
    </ModalCreateAdsStyle>
  );
}

export default ModalCreateAds;




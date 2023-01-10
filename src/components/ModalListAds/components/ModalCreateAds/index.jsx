import ModalCreateAdsStyle from "./styles";
import { FaWindowClose } from "react-icons/fa";
import ExperienceContact from "./components/Experience_Contact";
import PersonalInfo from "./components/Personal_Info";
import WeekdayHour from "./components/WeekDay_Hour";

// userform
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { HomePageContext } from "../../../../context/MainPage";

function ModalCreateAds({ setOpenModalCreateAds }) {

  const {registerAds} = useContext(HomePageContext)

  const {register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  })

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




import ModalLoginOrLogoutStyle from "./styles";
import { FaWindowClose } from 'react-icons/fa'

import { useForm } from "react-hook-form";
import { HomePageContext } from "../../context/MainPage";
import { useContext } from "react";

function ModalLoginOrLogout({setOpenModalLogin, setOpenModalRegisterUser}) {
  
  const {loginUser} = useContext(HomePageContext)

  const {register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  })
  function registerUser(data){
    console.log(data)
  }
  
  return (
    <ModalLoginOrLogoutStyle>
      <button onClick={()=> setOpenModalLogin(false)}>
        <FaWindowClose/>
      </button>
      <form action="" onSubmit={handleSubmit(loginUser)}>
        <label>
          <h3>Nome de usuário</h3>
          <input type="text" id="email" {...register("email")} placeholder="insira o seu nick cadastrado"/>
        </label>
        <label>
          <h3>Senha</h3>
          <input type="password" id="password" {...register("password")} placeholder="insira sua senha de acesso"/>
        </label>
        <button>Logar</button>
      </form>
      <h2>Não tem cadastro ?</h2>
      <div>
        <h3>registre-se aqui</h3>
        <button onClick={()=> setOpenModalRegisterUser(true)}>Cadastrar</button>
      </div>
    </ModalLoginOrLogoutStyle>
  );
}

export default ModalLoginOrLogout
import RegisterUserModalStyle from "./styles";
import { FaWindowClose } from 'react-icons/fa'

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function RegisterUserModal({setOpenModalRegisterUser}) {

  const {createUser} = useContext(HomePageContext)

  const {register, handleSubmit} = useForm({
  // const {register, handleSubmit, formState: {errors}} = useForm({
    // resolver: yupResolver(schema)
  })

  return (
    <RegisterUserModalStyle>
      <button onClick={()=> setOpenModalRegisterUser(false)}>
        <FaWindowClose/>
      </button>
      <h2>Cadastrar</h2>
      <form action="" onSubmit={handleSubmit(createUser)}>
        <label>
          <h3>Nome de usuário / apelido</h3>
          <input type="text" id="username" {...register("username")} placeholder="nome que ficará visivel para outros jogadores"/>
        </label>
        <label>
          <h3>E-mail</h3>
          <input type="text" id="email" {...register("email")} placeholder="ex de e-mail válido: email@gmail.com"/>
        </label>
        <label>
          <h3>Senha</h3>
          <input type="text" id="password" {...register("password")} placeholder="senha forte, com numeros e caracteres especiais"/>
        </label>
        <button>Cadastrar</button>
      </form>
    </RegisterUserModalStyle>
  );
}

export default RegisterUserModal;

import { Link } from "react-router-dom";
import { FormLogin } from "./components/FormLogin";

import Logo from "../../assets/logo.svg";
import Circles from "../../assets/circles.svg";

import { SubTitle } from "../../styles/global";
import {
  ContainerImg,
  LoginContainer,
  LoginFooter,
  LoginWrapper,
} from "./styles";

export const Login = () => {
  return (
    <LoginWrapper data-testid="login-page">
      <ContainerImg className="d-none d-md-flex col-sm-6">
        <div className="d-flex mt-auto mx-auto">
          <img className="mt-4" src={Logo} alt="Logo araujo" />
        </div>
        <div className="mt-auto">
          <img className="w-100 " src={Circles} alt="Circulos" />
        </div>
      </ContainerImg>
      <LoginContainer className="col-12 col-md-6">
        <FormLogin />
        <LoginFooter>
          <SubTitle>Não tem conta? </SubTitle>
          <Link to={"/cadastro"}>Comece aqui</Link>
        </LoginFooter>
      </LoginContainer>
    </LoginWrapper>
  );
};

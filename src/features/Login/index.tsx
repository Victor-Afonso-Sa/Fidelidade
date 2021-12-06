// @flow
import * as React from "react";
import Logo from "../../assets/mini-logo.svg";
import { FormLogin } from "./components/FormLogin";
import { ContainerImg, ContainerLogin, LoginWrapper } from "./styles";
type Props = {};
export const Login = (props: Props) => {
  return (
    <LoginWrapper>
      <ContainerImg className="d-none d-sm-flex col-sm-6">
        <img src={Logo} alt="Logo araujo" />
      </ContainerImg>
      <ContainerLogin className="col-12 col-sm-6">
        <FormLogin />
      </ContainerLogin>
    </LoginWrapper>
  );
};

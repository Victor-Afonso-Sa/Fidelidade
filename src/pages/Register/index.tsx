// @flow
import * as React from "react";
import {
  RegisterContainer,
  RegisterFormContainer,
  RegisterLogoContainer,
  FormHeader,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { MdArrowForward } from "react-icons/md";
import { RegisterForm } from "../../components/RegisterForm";
import { RegisterType } from "../../types/RegisterTypes";
import { useNavigate } from "react-router-dom";
type Props = {};

export const Register = (props: Props) => {
  let navigate = useNavigate();

  const onSubmit = (data: RegisterType) => {
    console.log(data);
  };
  return (
    <RegisterContainer>
      <RegisterLogoContainer className="col-5 d-none d-md-flex">
        <img src={Logo} alt="+Fidelidade logo" width={250} />
      </RegisterLogoContainer>
      <RegisterFormContainer className="col-12 col-md-7">
        <FormHeader className="mb-3">
          <div className="d-flex justify-content-between m-2">
            <h4 className="fw-bold">Novo Usuário</h4>
            <MdArrowForward className="hoverable-icon p-1" size={29} onClick={() => navigate("/login")} />
          </div>
          <div className="d-flex justify-content-center m-2 text-capitalize">
            <h5 className="fw-light">
              Cadastre-se, e receba{" "}
              <span className="text__purple fw-bold">Cash Back</span> com
              sistema de
              <span className="text__purple fw-bold"> Fidelidade</span>
            </h5>
          </div>
        </FormHeader>
        <div className="d-flex justify-content-center m-4">
          <RegisterForm onSubmit={onSubmit} btnText="Cadastrar" />
        </div>
      </RegisterFormContainer>
    </RegisterContainer>
  );
};

// @flow
import * as React from "react";
import { MdEdit } from "react-icons/md";
import { RegisterForm } from "../../components/RegisterForm";
import { Title } from "../../styles/global";
import { theme } from "../../styles/theme";
import { RegisterType } from "../../types/RegisterTypes";
import { CirclePrimaryBtnOutline } from "./../../styles/global";
type Props = {};
export const EditProfile = (props: Props) => {
  const onSubmit = (data: RegisterType) => {};
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <div className="w-50">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Title className="h-100 mb-0">Minhas informações</Title>
          <CirclePrimaryBtnOutline className=" ms-5">
            <MdEdit color={theme.primary} size={24} />
          </CirclePrimaryBtnOutline>
        </div>
        <RegisterForm onSubmit={onSubmit} btnText="Editar" allReadOnly />
      </div>
    </div>
  );
};

// @flow
import { MdEdit } from "react-icons/md";

import { RegisterForm } from "../../../components/RegisterForm";

import { Title } from "../../../styles/global";
import { theme } from "../../../styles/theme";
import { CirclePrimaryBtnOutline } from "../../../styles/global";
import { FormContainer } from "./styles";

export const EditProfile = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <FormContainer>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Title className="h-100 mb-0">Minhas informações</Title>
          <CirclePrimaryBtnOutline className=" ms-5">
            <MdEdit color={theme.primary} size={24} />
          </CirclePrimaryBtnOutline>
        </div>
        <RegisterForm btnText="Editar" allReadOnly />
      </FormContainer>
    </div>
  );
};

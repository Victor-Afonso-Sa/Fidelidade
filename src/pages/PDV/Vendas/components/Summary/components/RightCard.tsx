// @flow
import * as React from "react";
import { DisplayCoins } from "../../../../../../components/DisplayCoins";
import { InputContainer, RightCardWrapper } from "../styles";
import UserImage from "../../../../../../assets/user.svg";
import { CardRow } from "./CardRow";
import { PrimaryBtnOutline } from "../../../../../../styles/global";
import { SecondaryBtn } from "./../../../../../../styles/global";
import { Input } from "../../../../../../components/Input";
import { useForm } from "react-hook-form";
import { MdClear } from "react-icons/md";

type Props = {};

export const RightCard = (props: Props) => {
  const [applyCoins, setApplyCoins] = React.useState(false);
  const { register } = useForm();
  return (
    <RightCardWrapper className="col-12 col-md-4">
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-center justify-self-start">
          <img src={UserImage} alt="Usuario" width="96" />
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center ms-4">
          <h6 className="fw-bold">Nome do Cliente</h6>
          <DisplayCoins amount={500} />
        </div>
      </div>
      <CardRow label="Fidelizado em" value="01/12/2021" />
      <CardRow label="CPF" value="999.999.999-09" />
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-lg-between align-items-center mt-2">
        <SecondaryBtn>Cancelar compra</SecondaryBtn>
        {applyCoins ? (
          <InputContainer className="">
            <Input
              className="mx-auto w-50"
              name="DiscountCoins"
              register={register}
              type="number"
              label="Quantidade"
            />
            <MdClear className="" size="14" onClick={() => setApplyCoins(false)}/>
          </InputContainer>
        ) : (
          <PrimaryBtnOutline className="mt-2 mt-lg-0" onClick={() => setApplyCoins(true)}>
            Usar moedas
          </PrimaryBtnOutline>
        )}
      </div>
    </RightCardWrapper>
  );
};

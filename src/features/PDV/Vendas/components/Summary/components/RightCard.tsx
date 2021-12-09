// @flow
import * as React from "react";
import { DisplayCoins } from "../../../../../../components/DisplayCoins";
import { RightCardWrapper } from "../styles";
import UserImage from "../../../../../../assets/user.svg";
import { CardRow } from "./CardRow";
import { PrimaryBtnOutline } from "../../../../../../styles/global";
import { SecondaryBtn } from "./../../../../../../styles/global";

type Props = {};

export const RightCard = (props: Props) => {
  return (
    <RightCardWrapper className="col-12 col-md-4">
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-center justify-self-start">
          <img src={UserImage} alt="Usuario" width="96" />
        </div>
        <div className="d-flex flex-column align-items-center ms-4">
          <h6 className="fw-bold">Nome do Cliente</h6>
          <DisplayCoins amount="500" />
        </div>
      </div>
      <CardRow label="Fidelizado em" value="01/12/2021" />
      <CardRow label="CPF" value="999.999.999-09" />
      <div className="d-flex justify-content-between mt-2">
        <SecondaryBtn>Cancelar compra</SecondaryBtn>
        <PrimaryBtnOutline>Usar moedas</PrimaryBtnOutline>
      </div>
    </RightCardWrapper>
  );
};

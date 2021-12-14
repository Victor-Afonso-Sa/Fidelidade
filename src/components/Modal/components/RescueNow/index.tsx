import { useState } from "react";
import { useForm } from "react-hook-form";
import coin from "../../../../assets/coin.svg";
import { formatter } from "../../../../utils/functions";
import { Input } from "../../../Input";
import {
  ArrowRightIcon,
  BalanceText,
  CashBackText,
  CoinText,
  InformationLineIcon,
  RuleSystemText,
  SecondaryBg,
} from "./style";

export const RescueNow = (props: any) => {
  const { value } = props;
  const [cashValue, setCashValue] = useState(formatter.format(0));
  const { register } = useForm();
  const onValueChange = (value: number) => {
    setCashValue(formatter.format(value / 100));
  };
  return (
    <div className="d-flex flex-column m-4 h-100">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <InformationLineIcon className="d-64"></InformationLineIcon>
          <RuleSystemText>
            A cada 100 Moedas Araujo, você pode trocar por R$ 1,00.
          </RuleSystemText>
        </div>
        <SecondaryBg className="d-flex justify-content-center p-4">
          <div className="d-flex align-items-center justify-content-center">
            <BalanceText className="d-flex align-items-center">
              Você possui:
            </BalanceText>
            <img
              className="d-32"
              style={{ marginRight: "8px" }}
              src={coin}
              alt=""
            />
            <CoinText>{value}</CoinText>
          </div>
        </SecondaryBg>
        <div className="d-flex align-items-center justify-content-around pt-2 my-2">
          <Input
            name="value"
            placeholder="Insira a quantidade de moedas"
            register={register}
            label="Moedas Araujo"
            type="number"
            customOnChange={onValueChange}
          />
          <ArrowRightIcon className="d-32"></ArrowRightIcon>
          <CashBackText>{cashValue}</CashBackText>
        </div>
      </div>
    </div>
  );
};

RescueNow.defaultProps = {
  value: 0,
};

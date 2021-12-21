import { useState } from "react";
import { useForm } from "react-hook-form";
import { formatter } from "../../../../utils/functions";
import { DisplayCoins } from "../../../DisplayCoins";
import { Input } from "../../../Input";
import {
  ArrowRightIcon,
  BalanceText,
  CashBackText, InformationLineIcon,
  RuleSystemText,
  SecondaryBg
} from "./style";

interface RescueNowModel {
  value?: number;
  emitter?(value: any): any;
}

export const RescueNow = ({ value=0, emitter }: RescueNowModel) => {
  const [cashValue, setCashValue] = useState(formatter.format(0));
  const { register } = useForm();
  const onValueChange = (value: string) => {
    setCashValue(formatter.format(value ? (parseInt(value) / 100) : 0 / 100));
    if (emitter) {
      const aux = parseInt(value);
      aux && aux !== 0 ? emitter(true) : emitter(false);
    }
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
            <DisplayCoins amount={value || 0} />
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
          <ArrowRightIcon className="d-32 mx-1"></ArrowRightIcon>
          <CashBackText>{cashValue}</CashBackText>
        </div>
      </div>
    </div>
  );
};

RescueNow.defaultProps = {
  value: 0,
};

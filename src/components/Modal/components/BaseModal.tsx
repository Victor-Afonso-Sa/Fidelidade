// @flow
import * as React from "react";
import { UseFormRegister } from "react-hook-form";
import { Input } from "../../Input";
import {
  ArrowRightIcon,
  BalanceText,
  InformationLineIcon,
  RuleSystemText,
  SecondaryBg,
} from "./RescueNow/style";
type Props = {
  modalText: string;
  balance: any;
  InputName: string;
  cashValue: any;
  register: UseFormRegister<any>;
  onValueChange?: any;
  label: string;
  mask?: string;
};
export const BaseModal = ({
  modalText,
  balance,
  InputName,
  register,
  onValueChange,
  cashValue,
  mask,
  label,
}: Props) => {
  return (
    <div className="d-flex flex-column m-4 h-100">
      <div className="d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <InformationLineIcon className="d-64"></InformationLineIcon>
          <RuleSystemText>{modalText}</RuleSystemText>
        </div>
        <SecondaryBg className="d-flex justify-content-center p-4">
          <div className="d-flex align-items-center justify-content-center">
            <BalanceText className="d-flex align-items-center">
              Você possui:
            </BalanceText>
            <div className="d-flex align-items-center">{balance}</div>
          </div>
        </SecondaryBg>
        <div className="d-flex align-items-center justify-content-around pt-2 my-2">
          <Input
            name={InputName}
            register={register}
            label={label}
            type="number"
            customOnChange={onValueChange}
            mask={mask}
          />
          <ArrowRightIcon className="d-32 mx-1"></ArrowRightIcon>
          {cashValue}
        </div>
      </div>
    </div>
  );
};

// @flow
import * as React from "react";

import { FieldError, UseFormRegister } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { CustomInput, InputWrapper } from "./styles";

type Props = {
  type: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
  inputClassName?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean | false;
  mask?: string;
  error?: FieldError;
  customOnChange?: Function;
};
export const Input = (props: Props) => {
  const register = props.register(props.name, {
    onChange: (e) => props.customOnChange ? props.customOnChange(e.target.value) : undefined,
  });

  return (
    <InputWrapper>
      <div className={`form-floating mb-3 ${props.className ?? ""}`}>
        <ReactInputMask
          mask={props.mask || ""}
          onChange={register.onChange}
          onBlur={register.onBlur}
          readOnly={props.readOnly}
          maskPlaceholder=" "
        >
          {() => (
            <CustomInput
              type={props.type}
              className={`${props.inputClassName ?? ""} form-control ${
                props.error ? "is-invalid" : ""
              } `}
              id={props.name}
              {...register}
              placeholder={props.placeholder}
              readOnly={props.readOnly}
            />
          )}
        </ReactInputMask>
        <label htmlFor="CPF">{props.label}</label>
      </div>
    </InputWrapper>
  );
};

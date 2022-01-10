// @flow

import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { CustomInput, InputWrapper } from "./styles";

type Props = {
  type: string;
  label: string;
  name: string;
  register?: UseFormRegister<any>;
  inputClassName?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean | false;
  mask?: string;
  error?: FieldError;
  customOnChange?: Function;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    name,
    label,
    type,
    inputClassName,
    className,
    placeholder,
    value,
    readOnly,
    mask,
    onChange,
    onBlur,
    error = null,
    customOnChange,
    register,
    ...rest
  },
  ref
) => {
  return (
    <InputWrapper data-testid="input-component">
      <div className={`form-floating mb-3 ${className ?? ""}`}>
        <ReactInputMask
          mask={mask || ""}
          onChange={
            register
              ? register(name, {
                  onChange: (e) =>
                    customOnChange ? customOnChange(e.target.value) : undefined,
                }).onChange
              : onChange
          }
          onBlur={onBlur}
          readOnly={readOnly}
          maskPlaceholder={null}
        >
          {() => (
            <CustomInput
              type={type}
              className={`${inputClassName ?? ""} form-control ${
                error ? "is-invalid" : ""
              } `}
              placeholder={placeholder}
              readOnly={readOnly}
              id={name}
              name={name}
              ref={ref}
              {...rest}
            />
          )}
        </ReactInputMask>
        <label htmlFor={name}>{label}</label>
      </div>
    </InputWrapper>
  );
};

export const Input = forwardRef(InputBase);

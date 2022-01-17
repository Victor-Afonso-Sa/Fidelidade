// @flow

import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import { InputWrapper } from "./styles";

type Props = {
  label: string;
  name: string;
  className?: string;
  inputClassName?: string;
  readOnly?: boolean | false;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, inputClassName, className, readOnly, error = null, ...rest },
  ref
) => {
  return (
    <InputWrapper>
      <div className={"form-floating mb-3"}>
        <input
          name={name}
          data-testid={name}
          id={name}
          className={`${className ?? ""} form-control ${
            error ? "is-invalid" : ""
          } `}
          ref={ref}
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </InputWrapper>
  );
};

export const Input = forwardRef(InputBase);

import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import ReactInputMask from "react-input-mask";

import { Container } from "./styles";

interface InputMaskprops extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  placeholder: string;
  mask: string;
  inputClassName?: string;
  error?: FieldError;
}

const InputMaskBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputMaskprops
> = (
  { label, name, placeholder, type, error, mask, inputClassName, ...rest },
  ref
) => {
  return (
    <Container>
      <div className={"form-floating mb-3"}>
        <ReactInputMask
          mask={mask}
          data-testid="inputmask-component"
          className={`${inputClassName ?? ""} form-control ${
            error ? "is-invalid" : ""
          } `}
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </Container>
  );
};

export const InputMask = forwardRef(InputMaskBase);

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
  inputClassName?: string;
  readOnly?: boolean | false;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, inputClassName, readOnly, error = null, ...rest },
  ref
) => {
  return (
    <InputWrapper>
      <div className={"form-floating mb-3"}>
        <input
          name={name}
          id={name}
          className={`${inputClassName ?? ""} form-control ${
            error ? "is-invalid" : ""
          } `}
          ref={ref}
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </InputWrapper>
    // <InputWrapper>
    //   <div className={`form-floating mb-3 ${className ?? ""}`}>
    //     <ReactInputMask
    //       mask={mask || ""}
    //       onChange={onChange}
    //       onBlur={onBlur}
    //       readOnly={readOnly}
    //       maskPlaceholder={null}
    //     >
    //       {() => (
    //         <CustomInput
    //           data-testid="input-component"
    //           type={type}
    //           className={`${inputClassName ?? ""} form-control ${
    //             error ? "is-invalid" : ""
    //           } `}
    //           placeholder={placeholder}
    //           readOnly={readOnly}
    //           id={name}
    //           name={name}
    //           ref={ref}
    //           {...rest}
    //         />
    //       )}
    //     </ReactInputMask>
    //     <label htmlFor={name}>{label}</label>
    //   </div>
    // </InputWrapper>
  );
};

export const Input = forwardRef(InputBase);

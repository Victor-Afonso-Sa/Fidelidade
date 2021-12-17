// @flow
import * as React from "react";
import { CardContentRow } from "../styles";
type Props = {
  label?: string;
  value?: string;
  elementValue?: any;
  elementLabel?: any;
  className?: string;
};
export const CardRow = ({
  label,
  value,
  className,
  elementValue,
  elementLabel,
}: Props) => {
  return (
    <CardContentRow className={className ?? ""}>
      {elementLabel ? elementLabel : <h5 className="label">{label}</h5>}
      {elementValue ? elementValue : <h5>{value}</h5>}
    </CardContentRow>
  );
};

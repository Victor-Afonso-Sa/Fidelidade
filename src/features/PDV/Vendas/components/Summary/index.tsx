// @flow
import * as React from "react";
import { RightCard } from "./components/RightCard";
import { SummaryCard } from "./components/SummaryCard";
import { SumarryWrapper } from "./styles";

type Props = {};

export const Summary = (props: Props) => {
  return (
    <SumarryWrapper>
      <RightCard />
      <SummaryCard />
    </SumarryWrapper>
  );
};

// @flow
import * as React from "react";
import { Summary } from "./components/Summary";
import { TableContainer, VendasWrapper } from "./styles";
import { Table } from "./components/Table";

type Props = {};

export const Vendas = (props: Props) => {
  return (
    <VendasWrapper>
      <TableContainer>
        <Table />
      </TableContainer>
      <Summary />
    </VendasWrapper>
  );
};

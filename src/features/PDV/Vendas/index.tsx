// @flow
import * as React from "react";
import { Summary } from "../Summary";
import { TableContainer, VendasWrapper } from "./styles";
import { Table } from "./Table";

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

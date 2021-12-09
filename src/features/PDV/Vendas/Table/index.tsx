// @flow
import * as React from "react";
import { TableWrapper, Tbody, Thead } from "../styles";
type Props = {};
export const Table = (props: Props) => {
  return (
    <TableWrapper>
      <Thead>
        <tr>
          <th>Item</th>
          <th className="text-center">Quantidade</th>
          <th className="text-end">Preço</th>
        </tr>
      </Thead>
      <Tbody>
        <tr>
          <td>Remedio</td>
          <td className="text-center">1</td>
          <td className="text-end">R$ 10,99</td>
        </tr>
        <tr>
          <td>Remedio</td>
          <td className="text-center">1</td>
          <td className="text-end">R$ 10,99</td>
        </tr>
      </Tbody>
    </TableWrapper>
  );
};

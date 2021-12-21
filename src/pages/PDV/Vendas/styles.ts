import styled from "styled-components";
import { DivWithScroll } from "../../../styles/global";

export const VendasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Thead = styled.thead`
  background-color: #fff;
  z-index: 2;
  height: 60px;
  padding: 20px;
  font-weight: bold;
  text-align: justify;
  color: #c4c4c4;
  th {
    padding: 20px;
  }
`;
export const TableWrapper = styled.table`
  width: calc(100vw - 80px);
`;
export const TableContainer = styled(DivWithScroll("&"))`
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow: auto;
  @media screen and (max-width: 576px) {
    display: block;
    overflow: scroll;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Tbody = styled.tbody`
  font-weight: bold;
  text-align: justify;
  color: ${({ theme }) => theme.primary};
  tr {
    border-bottom: 1.5pt solid #fff;
  }
  td {
    padding: 20px;
  }
`;

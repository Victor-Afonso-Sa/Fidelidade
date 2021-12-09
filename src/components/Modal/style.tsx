import styled from "styled-components";
import { DivWithScroll } from "../../styles/global";

export const ModalFrame = styled(DivWithScroll("&"))`
  background-color: white;
  border-radius: 8px;
  min-width: calc(100vw - 30%) !important;
  min-height: calc(100vh - 30%) !important;
  max-height: calc(100vh - 10%) !important;
  max-width: calc(100vh - 10%) !important;
  overflow: auto;
  padding: 10px;
`;

export const ModalTitle = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
`;

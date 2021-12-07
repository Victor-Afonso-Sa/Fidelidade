import styled from "styled-components";

export const ModalFrame = styled.div`
  background-color: white;
  border-radius: 8px;
  width: calc(100vw - 30%) !important;
  height: calc(100vh - 30%) !important;
  padding: 10px;
`;

export const ModalTitle = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
`;

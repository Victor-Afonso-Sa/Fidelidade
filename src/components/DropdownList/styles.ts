import styled from "styled-components";

export const DropdownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const DropdownItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1pt solid ${({ theme }) => theme.gray};
  padding: 20px 0;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;
export const ItemTitle = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;
export const ItemIcon = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 24px;
`;
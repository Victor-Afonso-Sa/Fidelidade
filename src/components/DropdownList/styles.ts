import { Menu } from "antd";
import styled from "styled-components";

export const DropdownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: #fff;
  padding: 0px 15px 10px 15px;
  border-radius: 10px;
`;
export const DropdownItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1pt solid ${({ theme }) => theme.gray};
  padding: 20px 10px;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  &:hover {
    background: #f4ecff;
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

export const DropdownMenu = styled(Menu)`
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 5px;
  & .first {
    border-top: 1pt solid ${({ theme }) => theme.gray};
  }
`;

import { Menu } from "antd";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface DropdownItemContainerProps {
  active?: boolean;
}

interface IconProps {
  active?: boolean;
}

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
export const DropdownItemContainer = styled.div<DropdownItemContainerProps>`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1pt solid ${({ theme }) => theme.gray};
  padding: 20px 5px;
  background-color: ${(props) => (props.active ? `${theme.background}` : "")};
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
  font-size: 12px;
  @media screen and (max-width: 1155px) {
    font-size: 9px;
  }
`;
export const ItemIcon = styled.span<IconProps>`
  padding-left: 12px;
  color: ${(props) => (props.active ? `${theme.darkBlue}` : `${theme.gray}`)};
  font-size: 24px;
`;

export const DropdownMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 0;
  padding: 5px;
  & .first {
    border-top: 1pt solid ${({ theme }) => theme.gray};
  }
`;

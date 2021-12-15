import styled from "styled-components";
import { Tooltip } from './../../styles/global';

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
  padding: 10px 0;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  ${Tooltip("&")}
`;
export const ItemTitle = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`;
export const ItemIcon = styled.span`
  color: ${({ theme }) => theme.gray};
  font-size: 24px;
`;
export const Badge = styled.span`
  position: absolute;
  margin-left: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color:white;
  font-size: 12px;
  line-height: 2;
  text-align: center;
`;

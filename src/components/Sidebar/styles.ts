import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IconWrapperType {
  active?: boolean;
}

export const Aside = styled.aside`
  height: calc(100vh - 70px);
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  .active {
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.orange};
  }
`;
export const IconWrapper = styled(NavLink)<IconWrapperType>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 36px;
  padding: 0.5em 0;
`;

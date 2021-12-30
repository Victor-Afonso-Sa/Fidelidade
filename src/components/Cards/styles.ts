import { Card } from "antd";
import styled from "styled-components";
import { Cards } from "../../types/global";

export const CardsContainer = styled(Card)<Cards>`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ color, theme }) => color ?? theme.primary};
  background-color: ${({ background, theme }) => background ?? "#3D59AB"};
  margin: 10px;
  border-radius: 10px;
  animation-duration: 1.2s;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const MenssageCardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: bold;
`;
export const MenssageCardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;

import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  label {
    color: ${({ theme }) => theme.primary};
    padding-left: 0px;
    margin-bottom: 5px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

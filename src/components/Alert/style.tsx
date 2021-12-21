import styled from "styled-components";

export const AlertFrame = styled.div`
  background-color: white;
  border-radius: 8px;
  min-width: 580px;
  min-height: 380px;
  width: 580px;
  height: 380px;
  position: relative;
  
  animation-duration: 0.2s;
`;

export const AlertTitleIcon = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 178px;
  height: 178px;
  bottom: 75%;
  left: 44px;
`;

export const AlertDescription = styled.span`
  color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 89px;
`;

export const AlertActions = styled.div``;

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

  @media (max-width: 768px) {
    & {
      min-width: 480px;
      min-height: 380px;
      width: 480px;
      height: 380px;
    }
  }

  @media (max-width: 480px) {
    & {
      min-width: 320px;
      min-height: 200px;
      width: 320px;
      height: 200px;
    }
  }
`;

export const AlertTitleIcon = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  width: 178px;
  height: 178px;
  bottom: 75%;
  left: 44px;

  @media (max-width: 768px) {
    & {
      width: 128px;
      height: 128px;
      bottom: 80%;
    }
  }

  @media (max-width: 480px) {
    & {
      width: 78px;
      height: 78px;
      bottom: 75%;
    }
  }
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

  @media (max-width: 768px) {
    & {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    & {
      font-size: 1.5rem;
    }
  }
`;

export const AlertActions = styled.div``;

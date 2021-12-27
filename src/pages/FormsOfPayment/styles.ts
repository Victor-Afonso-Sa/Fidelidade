import styled from "styled-components";

interface PaymentProps {
  color?: string;
  active?: boolean;
}

export const Content = styled.div`
  width: 80%;
  margin: 0 20px;
  .content-container {
    min-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
    border-radius: 8px;
  }
  @media screen and (max-width: 600px) {
    .content-container {
      min-width: 100%;
    }
  }
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 10px;
`;

export const Payment = styled.div<PaymentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.active ? `` : `2px solid ${props.color}`)};
  border-radius: 10px 10px 0px 0px;
  padding: 5px 40px 5px 40px;
  background-color: ${(props) => (props.active ? "#E5E5E5" : "")};
  height: 60px;
  cursor: pointer;
  span {
    margin-top: 5px;
    color: ${({ theme }) => theme.primary};
    margin-right: 10px;
    font-size: 17px;
    font-weight: bold;
  }
  .pix {
    height: 25px;
    width: 25px;
  }
`;

export const Title = styled.span`
  margin-top: 5px;
`;

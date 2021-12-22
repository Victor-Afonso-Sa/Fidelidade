import styled from "styled-components";

interface PaymentProps {
  color?: string;
  active?: boolean;
}

export const Content = styled.div`
  width: 80%;
  margin: 0 20px;
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
  border: ${(props) => (props.active ? `2px solid ${props.color}` : "")};
  border-radius: 10px 10px 0px 0px;
  padding: 5px 40px 5px 40px;
  background-color: ${(props) => (props.active ? "" : "#E5E5E5")};
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

export const PixKey = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  justify: center;
  align-items: center;
  padding: 8px 10px 8px 10px;
  .pix-text {
    margin-left: 10px;
  }
  .delete-icon {
    margin-left: 30px;
  }
  .text {
    color: ${({ theme }) => theme.moneyColor};
  }
  .text-2 {
    color: #fff;
  }
`;

export const PixTitle = styled.div`
  color: #fff;
`;

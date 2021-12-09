// @flow
import * as React from "react";
import styled from "styled-components";
import { PaymentCard } from "../../../../../components/PaymentCard";
import { Row } from "../../../../../styles/global";
import { FinishContainer } from "./styles";
type Props = {};
export const ModalTitle = styled.h1`
  color: ${({ theme }) => theme.success};
`;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;
export const ModalSubTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-transform: uppercase;
`;
export const FinishModal = (props: Props) => {
    const [method, setMethod] = React.useState<string | undefined>(undefined)
  return (
    <FinishContainer>
      <Row className="justify-content-center">
        <ModalTitle>R$ 3200,00</ModalTitle>
      </Row>
      <PaymentContainer>
        <ModalSubTitle>Formas de pagamento</ModalSubTitle>
        <Row>
          <PaymentCard active={method === 'dinheiro'} onClick={() => setMethod('dinheiro')} icon="FaMoneyBillWave" label="Dinheiro" />
          <PaymentCard active={method === 'cartao'} onClick={() => setMethod('cartao')} icon="FaCreditCard" label="Credito / Debito" />
        </Row>
      </PaymentContainer>
       <div className="d-flex justify-content-center mt-4">
       <ModalSubTitle>
        {method ? '' : 'Selecione a forma de pagamento'}
       </ModalSubTitle>
       </div>
    </FinishContainer>
  );
};

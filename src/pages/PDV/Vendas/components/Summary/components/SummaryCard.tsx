// @flow
import * as React from "react";
import { Row } from "../../../../../../styles/global";
import { SummaryCardWrapper, TotalValue } from "../styles";
import { CardRow } from "./CardRow";
import { Modal } from "./../../../../../../components/Modal";
import { FinishModal } from "../../FinishModal";

type Props = {};

export const SummaryCard = (props: Props) => {
  const [showModal, setModalState] = React.useState(false);

  return (
    <>
      <SummaryCardWrapper className="col-12 col-md-8 ms-2">
        <Row>
          <CardRow className="col-5" label="Total de Itens" value="4" />
          <CardRow
            className="ms-auto col-5"
            label="Subtotal"
            value="R$ 00,00"
          />
        </Row>
        <Row>
          <CardRow className="col-5" label="Descontos" value="R$ 00,00" />
          <CardRow className="ms-auto col-5" label="Taxas" value="R$ 00,00" />
        </Row>
        <Row className="mt-auto align-items-center">
          <CardRow
            className="col-12 mt-auto"
            elementLabel={<h5 className="m-0 label">Valor total</h5>}
            elementValue={
              <TotalValue
                onClick={() => {
                  setModalState(true);
                }}
              >
                R$ 3200,00
              </TotalValue>
            }
          />
        </Row>
      </SummaryCardWrapper>
      {showModal && (
        <Modal
          content={<FinishModal />}
          state={showModal}
          setState={setModalState}
          okText="Finalizar"
          title="Finalizar"
        />
      )}
    </>
  );
};

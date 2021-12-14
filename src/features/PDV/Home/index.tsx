// @flow
import * as React from "react";
import { BsHandbagFill } from "react-icons/bs";
import { Modal } from "../../../components/Modal";
import { NewBuyModal } from "./components/NewBuyModal";
import { NewBuyCard } from "./styles";
type Props = {};

export const PdvHome = (props: Props) => {
  const [showModal, setModalState] = React.useState(false);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <NewBuyCard
          onClick={() => {
            setModalState(true);
          }}
        >
          <h4>Nova Compra</h4>
          <BsHandbagFill />
        </NewBuyCard>
      </div>
      {showModal && (
        <Modal
          content={<NewBuyModal />}
          state={showModal}
          setState={setModalState}
          okText="Continuar"
          title="Nova Compra"
        />
      )}
    </>
  );
};

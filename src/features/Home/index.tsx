// @flow
import * as React from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { RescueNow } from "../../components/Modal/components/RescueNow";

export const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Header name="'Nome e sobrenome'" />
      <button
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        teste
      </button>
      {showModal && (
        <Modal
          content={<RescueNow></RescueNow>}
          setState={setShowModal}
          state={showModal}
          okText="Resgatar"
        />
      )}
    </>
  );
};

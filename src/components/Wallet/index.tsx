// @flow
import * as React from "react";
import { PrimaryBtnOutline, SubTitle } from "../../styles/global";
import { DisplayCoins } from "../DisplayCoins";
import { Modal } from "../Modal";
import { RescueNow } from "../Modal/components/RescueNow";
import { WalletCard } from "./styles";

type Props = {};
export const Wallet = (props: Props) => {
  const [showModal, setModalState] = React.useState(false);

  const modalContent = {
    ModalContent: RescueNow,
    contentProps: {
      value: 300,
    },
  };

  return (
    <WalletCard>
      <div className="header">Moedas Araujo</div>
      <div className="content">
        <SubTitle>Você Possui:</SubTitle>
        <DisplayCoins amount="500" />
      </div>
      <PrimaryBtnOutline
        className="w-100"
        onClick={() => {
          setModalState(true);
        }}
      >
        Resgatar
      </PrimaryBtnOutline>
      {showModal && (
        <Modal
          modalContent={modalContent}
          state={showModal}
          setState={setModalState}
          okText="Resgatar"
        />
      )}
    </WalletCard>
  );
};

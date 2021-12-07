// @flow
import * as React from "react";
import { SubTitle } from "../../styles/global";
import { DisplayCoins } from "../DisplayCoins";
import { Modal } from "../Modal";
import { RescueNow } from "../Modal/components/RescueNow";
import { ButtonClain, WalletCard } from "./styles";

type Props = {};
export const Wallet = (props: Props) => {
  const [showModal, setModalState] = React.useState(false);
  return (
    <WalletCard>
      <div className="header">Moedas Araujo</div>
      <div className="content">
        <SubTitle>Você Possui:</SubTitle>
        <DisplayCoins amount="500" />
      </div>
      <ButtonClain
        onClick={() => {
          setModalState(true);
        }}
      >
        Resgatar
      </ButtonClain>
      {showModal && (
        <Modal
          content={<RescueNow></RescueNow>}
          state={showModal}
          setState={setModalState}
          okText="Resgatar"
        />
      )}
    </WalletCard>
  );
};

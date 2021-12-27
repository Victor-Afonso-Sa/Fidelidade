import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useWallet } from "../../contexts/useWallet";
import * as AlertService from "../Alert";
import { RescueNow } from "../Modal/components/RescueNow";
import { Balance } from "./../Cards/BalanceCard";

import { AntButton, AntModal } from "../../styles/antDesign";

export const CoinWallet = (props: any) => {
  const { coinsWallet } = useWallet();
  const [isModalVisible, setModalVisible] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  function onModalContentEmitter(params: any) {
    setCanProceed(params);
  }

  return (
    <>
      <Balance
        className="w-100 animate__fadeInUp"
        title="Moedas - Saldo"
        btnText="Resgatar"
        amount={String(coinsWallet?.amount) || "0"}
        isCoins
        action={() => setModalVisible(true)}
      />
      <AntModal
        title="Resgatar Agora"
        centered
        visible={isModalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            disabled={!canProceed}
            onClick={() => {
              setModalVisible(false);
              AlertService.presentAlert({
                type: "success",
                message: "Resgate realizado com sucesso!",
              });
            }}
          >
            Finalizar
          </AntButton>,
        ]}
      >
        <RescueNow value={3000} emitter={onModalContentEmitter} />
      </AntModal>
    </>
  );
};

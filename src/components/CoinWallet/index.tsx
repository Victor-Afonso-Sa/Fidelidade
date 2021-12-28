import { useCallback, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useWallet } from "../../contexts/useWallet";
import * as AlertService from "../Alert";
import { RescueNow } from "../Modal/components/RescueNow";
import { Balance } from "./../Cards/BalanceCard";

import { AntButton, AntModal } from "../../styles/antDesign";

export const CoinWallet = () => {
  const {
    coinsWallet,
    canProceedConvertCoinsToMoney,
    handleTransferCoinsWalletToMoneyWallet,
  } = useWallet();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleRescueNowModal = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  }, []);

  const handleConvertCoinsToMoney = useCallback(() => {
    handleTransferCoinsWalletToMoneyWallet();
    setModalVisible(false);
    AlertService.presentAlert({
      type: "success",
      message: "Resgate realizado com sucesso!",
    });
  }, [handleTransferCoinsWalletToMoneyWallet]);

  return (
    <>
      <Balance
        className="w-100 animate__fadeInUp"
        title="Moedas - Saldo"
        btnText="Resgatar"
        amount={String(coinsWallet?.amount) || "0"}
        isCoins
        action={toggleRescueNowModal}
      />
      <AntModal
        title="Resgatar Agora"
        centered
        visible={isModalVisible}
        onCancel={toggleRescueNowModal}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={toggleRescueNowModal}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            disabled={!canProceedConvertCoinsToMoney}
            onClick={handleConvertCoinsToMoney}
          >
            Finalizar
          </AntButton>,
        ]}
      >
        <RescueNow />
      </AntModal>
    </>
  );
};

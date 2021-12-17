import { useState } from "react";
import { SubTitle } from "../../styles/global";
import { DisplayCoins } from "../DisplayCoins";
import { RescueNow } from "../Modal/components/RescueNow";
import { WalletCard } from "./styles";
import * as AlertService from "../Alert";
import { RiCloseCircleFill } from "react-icons/ri";

import { AntModal, AntButton } from "../../styles/antDesign";

export const Wallet = (props: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  function onModalContentEmitter(params: any) {
    setCanProceed(params);
  }

  return (
    <WalletCard>
      <div className="header">Moedas Araujo</div>
      <div className="content">
        <SubTitle>Você Possui:</SubTitle>
        <DisplayCoins amount="500" />
      </div>
      <AntButton
        type="default"
        styled="primary"
        className="w-100"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Resgatar
      </AntButton>
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
            Cancelar
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
            Resgatar
          </AntButton>,
        ]}
      >
        <RescueNow value={3000} emitter={onModalContentEmitter} />
      </AntModal>
    </WalletCard>
  );
};

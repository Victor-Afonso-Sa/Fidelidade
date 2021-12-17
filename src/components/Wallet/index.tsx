import { useState } from "react";
import { SubTitle } from "../../styles/global";
import { DisplayCoins } from "../DisplayCoins";
import { RescueNow } from "../Modal/components/RescueNow";
import { ButtonClain, WalletCard } from "./styles";
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
      <ButtonClain
        className="w-100"
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Resgatar
      </ButtonClain>
      <AntButton
        type="primary"
        styled="moneyColor"
        onClick={() => {
          AlertService.presentAlert({
            type: "success",
            message: "Resgate realizado com sucesso!",
          });
        }}
      >
        Ant Modal
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
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Return
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            disabled={!canProceed}
            onClick={() => {
              setModalVisible(false);
              AlertService.presentAlert({
                type: "success",
                message: "Resgate realizado com sucesso!",
              });
            }}
          >
            Submit
          </AntButton>,
        ]}
      >
        <RescueNow value={3000} emitter={onModalContentEmitter} />
      </AntModal>
    </WalletCard>
  );
};

import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { Backdrop, Button } from "../../styles/global";
import { ModalFrame, ModalTitle } from "./style";
import * as AlertService from "../Alert";

interface ModalPropsModel {
  modalContent: ModalContentModel;
  setState(state: boolean): void;
  state: boolean;
  title: string;
  cancelText: string;
  okText: string;
}

interface ModalContentModel {
  ModalContent: any;
  contentProps: any;
}

export const Modal = (props: ModalPropsModel) => {
  const { title, modalContent, setState, state, cancelText, okText } = props;
  const { ModalContent, contentProps } = modalContent;
  const [canProceed, setCanProceed] = useState(false);

  function onModalContentEmitter(params: any) {
    setCanProceed(params);
  }

  return (
    <Backdrop
      data-testid="modal"
      className="d-flex align-items-center justify-content-center"
    >
      <ModalFrame className="d-flex flex-column justify-content-between">
        <ModalTitle className="d-flex justify-content-between align-items-center">
          <h3>{title}</h3>
          <button
            className="btn rounded-circle m-0 p-0 d-32"
            onClick={() => {
              setState(!state);
            }}
          >
            <RiCloseCircleFill className="d-32" style={{ color: "white" }} />
          </button>
        </ModalTitle>
        {<ModalContent {...contentProps} emitter={onModalContentEmitter} />}
        <div className="d-flex justify-content-end col-12">
          <Button
            styled="primary"
            outline
            onClick={() => {
              setState(!state);
            }}
          >
            {cancelText}
          </Button>
          <Button
            className="mx-3"
            disabled={!canProceed}
            styled={canProceed ? "success" : "disabled"}
            onClick={() => {
              setState(!state);
              AlertService.presentAlert({
                type: "success",
                message: "Resgate realizado com sucesso!",
              });
            }}
          >
            {okText}
          </Button>
        </div>
      </ModalFrame>
    </Backdrop>
  );
};

Modal.defaultProps = {
  title: "Modal title",
  cancelText: "Cancelar",
  okText: "Ok",
};

import { useState, useEffect } from "react";
import { Backdrop, PrimaryBtnOutline } from "../../styles/global";
import {
  AlertFrame,
  AlertTitleIcon,
  AlertDescription,
  AlertActions,
} from "./style";
import { BehaviorSubject } from "rxjs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiErrorWarningLine, RiCloseCircleLine } from "react-icons/ri";
import { theme } from "../../styles/theme";

interface AlertPropsModel {
  type: "success" | "info" | "danger";
  message: string;
}

const open = new BehaviorSubject<boolean>(false);
let alertProps: AlertPropsModel = {
  type: "success",
  message: "Texto de exemplo aqui!",
};

const Alert = () => {
  const [opened, setState] = useState(false);
  useEffect(() => {
    if (!opened) {
      subscrible(setState);
    }
  }, [opened]);

  function close() {
    setState(false);
  }

  return (
    <Backdrop
      className="justify-content-center align-items-center"
      style={{ display: opened ? "flex" : "none" }}
    >
      <AlertFrame className="d-flex flex-column justify-content-center">
        <AlertTitleIcon className="d-flex justify-content-center align-items-center">
          {alertProps.type === "success" ? (
            <AiOutlineCheckCircle size={128} color={theme.success} />
          ) : alertProps.type === "info" ? (
            <RiErrorWarningLine size={128} color={theme.primary} />
          ) : alertProps.type === "danger" ? (
            <RiCloseCircleLine size={128} color={theme.danger} />
          ) : (
            <></>
          )}
        </AlertTitleIcon>
        <AlertDescription className="d-flex justify-content-center align-items-center">
          {alertProps.message}
        </AlertDescription>
        <AlertActions className="d-flex justify-content-center align-items-center p-4">
          <PrimaryBtnOutline onClick={close}>OK</PrimaryBtnOutline>
        </AlertActions>
      </AlertFrame>
    </Backdrop>
  );
};

export default Alert;

export const presentAlert = (props?: AlertPropsModel) => {
  if (props) {
    alertProps = props;
  }
  open.next(true);
};

function subscrible(setState: any) {
  open.subscribe((value) => {
    if (value) {
      setState(value);
      open.next(false);
    }
  });
}

// @flow
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./styles";
import { MdAccountBox, MdNotifications, MdSettings } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

type Props = {};

export const DropdownList = (props: Props) => {
  let navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownItem
        className="first"
        onClick={() => navigate("/perfil/editar")}
        label="Ver perfil"
        icon={<MdAccountBox />}
      />
      <DropdownItem
        onClick={() => navigate("/perfil/notificacoes")}
        label="Notificações"
        icon={<MdNotifications />}
        badgeCount={18}
      />
      <DropdownItem
        onClick={() => navigate("/perfil/formas-pagamento")}
        label="Formas de Pagamento"
        icon={<BsBank2 />}
      />
    </DropdownMenu>
  );
};

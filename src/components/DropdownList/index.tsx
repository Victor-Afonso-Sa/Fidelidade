// @flow
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./styles";
import { MdAccountBox, MdNotifications } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

type Props = {};

export const DropdownList = (props: Props) => {
  let navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = React.useState<string>("");
  return (
    <DropdownMenu>
      <DropdownItem
        className="first"
        onClick={() => {
          setActive("/perfil/editar");
          navigate("/perfil/editar");
        }}
        label="Ver perfil"
        icon={<MdAccountBox />}
        active={"/perfil/editar"}
      />
      <DropdownItem
        onClick={() => {
          navigate("/perfil/notificacoes");
          setActive("/perfil/notificacoes");
        }}
        label="Notificações"
        icon={<MdNotifications />}
        badgeCount={18}
        active={"/perfil/notificacoes"}
      />
      <DropdownItem
        onClick={() => {
          navigate("/perfil/formas-pagamento");
          setActive("/perfil/formas-pagamento");
        }}
        label="Formas de Pagamento"
        icon={<BsBank2 />}
        active={"/perfil/formas-pagamento"}
      />
    </DropdownMenu>
  );
};

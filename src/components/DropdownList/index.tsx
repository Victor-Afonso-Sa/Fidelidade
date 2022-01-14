import { useNavigate } from "react-router-dom";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./styles";
import { MdAccountBox, MdNotifications } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

export const DropdownList = () => {
  let navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownItem
        className="first"
        onClick={() => {
          navigate("/perfil/editar");
        }}
        label="Ver perfil"
        icon={<MdAccountBox />}
        active={"/perfil/editar"}
      />
      <DropdownItem
        onClick={() => {
          navigate("/perfil/notificacoes");
        }}
        label="Notificações"
        icon={<MdNotifications />}
        badgeCount={18}
        active={"/perfil/notificacoes"}
      />
      <DropdownItem
        onClick={() => {
          navigate("/perfil/formas-pagamento");
        }}
        label="Formas de Pagamento"
        icon={<BsBank2 />}
        active={"/perfil/formas-pagamento"}
      />
    </DropdownMenu>
  );
};

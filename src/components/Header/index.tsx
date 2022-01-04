import { HeaderContent, UserAcount, UserName, Wrapper } from "./styles";
import MiniLogo from "../../assets/mini-logo-F.png";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import { DropdownList } from "../DropdownList";
import { Avatar, Badge, Dropdown } from "antd";

type Props = {
  name: string;
  cargo?: string;
};

export const Header = ({ name, cargo }: Props) => {
  return (
    <>
      <Wrapper className="col-12">
        <div className="ms-3 d-flex align-items-center align-self-center">
          <img src={MiniLogo} alt="Logo Fidelidade" />
          {cargo && (
            <span className="header__title d-none d-md-block">Trasações</span>
          )}
        </div>
        <HeaderContent cargo={!!cargo}>
          <UserName>
            <div>
              <span>Olá </span> {name}{" "}
            </div>
            {cargo && <span>{cargo}</span>}
          </UserName>
          <Dropdown
            overlay={<DropdownList />}
            trigger={["click"]}
            placement="bottomLeft"
            arrow
          >
            <UserAcount className="dropdown">
              <Badge count={10} offset={[0, 10]} overflowCount={9}>
                <Avatar shape="circle" size={60} icon={<MdAccountCircle />} />
              </Badge>
              <MdExpandMore className="dropdown-toggle" size="30px" />
            </UserAcount>
          </Dropdown>
        </HeaderContent>
      </Wrapper>
    </>
  );
};

// @flow
import * as React from "react";
import {
  Dropdown,
  HeaderContent,
  UserAcount,
  UserName,
  Wrapper,
} from "./styles";
import MiniLogo from "../../assets/mini-logo.svg";
import { MdAccountCircle, MdExpandMore } from "react-icons/md";
import { DropdownList } from "../DropdownList";

type Props = {
  name: string;
  cargo?: string;
};

export const Header = ({ name, cargo }: Props) => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false);
  return (
    <>
      <Wrapper className="col-12">
        <div className="ms-3 d-flex align-items-center align-self-center">
          <img src={MiniLogo} alt="Logo Araujo" width="40" height="60" />
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
          <UserAcount className="dropdown" onClick={() => toggleDropdown(!isDropdownOpen)}>
            <MdAccountCircle size="60px" />
            <MdExpandMore className="dropdown-toggle" size="30px" />
          </UserAcount>
        </HeaderContent>
      </Wrapper>
      <Dropdown hidden={!isDropdownOpen}>
        <DropdownList />
      </Dropdown>
    </>
  );
};

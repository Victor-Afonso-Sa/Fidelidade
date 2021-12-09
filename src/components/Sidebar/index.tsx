// @flow
import * as React from "react";
import { Aside, IconWrapper } from "./styles";
import { AiFillHome, AiOutlineAreaChart } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { MdApps } from "react-icons/md";
type Props = {};
export const Sidebar = (props: Props) => {
  return (
    <Aside>
      <IconWrapper
        to="/pdv/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiFillHome />
      </IconWrapper>
      <IconWrapper
        to="/pdv/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiOutlineAreaChart />
      </IconWrapper>
      <IconWrapper
        to="/pdv/venda"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <BsHandbagFill />
      </IconWrapper>
      <IconWrapper
        to="/pdv/apps"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdApps />
      </IconWrapper>
    </Aside>
  );
};

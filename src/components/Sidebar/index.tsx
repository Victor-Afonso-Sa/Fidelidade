// @flow
import * as React from "react";
import { Aside, IconWrapper } from "./styles";
import { AiFillHome, AiOutlineAreaChart } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
type Props = {};
export const Sidebar = (props: Props) => {
  return (
    <Aside>
      <IconWrapper
        data-testid="homeIcon"
        to="/pdv/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiFillHome />
      </IconWrapper>
      <IconWrapper
        data-testid="dashboardIcon"
        to="/pdv/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiOutlineAreaChart />
      </IconWrapper>
      <IconWrapper
        data-testid="sellIcon"
        to="/pdv/venda"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <BsHandbagFill />
      </IconWrapper>
      <IconWrapper
        data-testid="appsIcon"
        to="/pdv/apps"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <AiOutlineOrderedList />
      </IconWrapper>
    </Aside>
  );
};

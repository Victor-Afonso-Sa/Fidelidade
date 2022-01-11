// @flow
import * as React from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ContentWrapper } from "./styles";

export const PDV = () => {
  return (
    <>
      <Header name="Funcionario" cargo="Gerente" />
      <div className="d-flex h-100">
        <Sidebar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </div>
    </>
  );
};

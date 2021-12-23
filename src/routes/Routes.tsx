// @flow
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Login } from "../pages/Login";
import { PdvHome } from "../pages/PDV/Home";
import { PDV } from "../pages/PDV/index";
import { Vendas } from "../pages/PDV/Vendas";
import { Profile } from "../pages/Profile";
import { EditProfile } from "../pages/Profile/EditProfile";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Profile />} path="/perfil">
          <Route element={<EditProfile />} path="/perfil/editar" />
          <Route element={<h1>notificacoes</h1>} path="/perfil/notificacoes" />
          <Route element={<h1>Config</h1>} path="/perfil/configuracao" />
        </Route>
        <Route element={<PDV />} path="/pdv">
          <Route element={<h1>Dashboard</h1>} path="/pdv/dashboard" />
          <Route element={<Vendas />} path="/pdv/venda" />
          <Route element={<PdvHome />} path="/pdv//home" />
          <Route element={<h1>Apps</h1>} path="/pdv//apps" />
        </Route>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

// @flow
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home/index";
import { PDV } from "../pages/PDV/index";
import { Vendas } from "../pages/PDV/Vendas";
import { PdvHome } from "../pages/PDV/Home";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { EditProfile } from "../pages/Profile/EditProfile";

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

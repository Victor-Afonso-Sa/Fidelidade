// @flow
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "./features/Login";
import { Home } from "./features/Home/index";
import { PDV } from "./features/PDV/index";
import { Vendas } from "./features/PDV/Vendas";
import { PdvHome } from "./features/PDV/Home";
import { Register } from "./features/Register";
import { Profile } from "./features/Profile";
import { EditProfile } from "./features/Profile/EditProfile";
import { FormsOfPayment } from "./features/FormsOfPayment";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Profile />} path="/perfil">
          <Route element={<EditProfile />} path="/perfil/editar" />
          <Route element={<h1>notificacoes</h1>} path="/perfil/notificacoes" />
          <Route element={<FormsOfPayment />} path="/perfil/formas-pagamento" />
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

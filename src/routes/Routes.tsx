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
import { FormsOfPayment } from "../pages/FormsOfPayment";
import { Products } from "../pages/Products";
import { AddProduct } from "../pages/Products/components/AddProduct";
import { EditProduct } from "../pages/Products/components/EditProduct";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route element={<Profile />}>
          <Route element={<EditProfile />} path="/perfil/editar" />
          <Route element={<h1>notificacoes</h1>} path="/perfil/notificacoes" />
          <Route element={<FormsOfPayment />} path="/perfil/formas-pagamento" />
        </Route>
        <Route element={<PDV />} path="/pdv">
          <Route element={<h1>Dashboard</h1>} path="/pdv/dashboard" />
          <Route element={<Vendas />} path="/pdv/venda" />
          <Route element={<PdvHome />} path="/pdv//home" />
          <Route element={<Products />} path="/pdv/produtos" />
          <Route element={<AddProduct />} path="/pdv/produtos/adicionar" />
          <Route element={<EditProduct />} path="/pdv/produtos/editar/:sku" />
        </Route>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

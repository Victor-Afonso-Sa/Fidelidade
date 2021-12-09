// @flow
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "./features/Login";
import { Home } from "./features/Home/index";
import { PDV } from './features/PDV/index';
import { Vendas } from "./features/PDV/Vendas";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<PDV />} path="/pdv" >
                    <Route element={(<h1>Dashboard</h1>)} path="/pdv/dashboard" />
                    <Route element={<Vendas />} path="/pdv/venda" />
                    <Route element={(<h1>Home</h1>)} path="/pdv//home" />
                    <Route element={(<h1>Apps</h1>)} path="/pdv//apps" />
                </Route>
                <Route element={<Home />} path="/" />
            </Routes>
        </BrowserRouter>
    );
};


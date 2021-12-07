// @flow
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "./features/Login";
import { Home } from "./features/Home/index";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route element={<Home />} path="/" />
            </Routes>
        </BrowserRouter>
    );
};


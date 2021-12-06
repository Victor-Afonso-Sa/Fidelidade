// @flow
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "./features/Login";
import { Home } from "./features/Home/index";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
            </Routes>
        </BrowserRouter>
    );
};


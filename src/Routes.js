import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";

import newProduct from "./Pages/newProduct";
import NotFound from "./Pages/notFound";
import ProductPage from "./Pages/ProductPage";

import { Private } from "./components/Private";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/product/:id" element={<ProductPage />} />
            <Route
                path="/product/add"
                element={<Private component={newProduct} />}
            />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

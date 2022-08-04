import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import NotFound from "./Pages/notFound";
import ProductPage from "./Pages/ProductPage";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

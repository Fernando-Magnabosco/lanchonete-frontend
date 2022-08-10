import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import newProduct from "./Pages/newProduct";
import NotFound from "./Pages/notFound";
import ProductPage from "./Pages/ProductPage";
import AddCategory from "./Pages/Categoria/AddCategory";

import { Private } from "./components/Private";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductPage />} />

            <Route
                path="/product/add"
                element={<Private component={newProduct} />}
            />
            <Route 
                path="/category/add" 
                element={<Private component={AddCategory}/>} 
            />


            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

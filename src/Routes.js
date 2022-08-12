import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/signUp";

import newProduct from "./Pages/newProduct";
import NotFound from "./Pages/notFound";
import ProductPage from "./Pages/ProductPage";
import UpdateProduct from "./Pages/updateProduct";
import UpdateCategory from "./Pages/updateCategory";
import UpdateIngredient from "./Pages/updateIngredient";

import AddIngredient from "./Pages/Ingredient/AddIngredient";
import AddCategory from "./Pages/Categoria/AddCategory";

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
            <Route
                path="/category/add/"
                element={<Private component={AddCategory} />}
            />

            <Route
                path="/product/edit/:id"
                element={<Private component={UpdateProduct} />}
            />

            <Route
                path="/ingredient/add"
                element={<Private component={AddIngredient} />}
            />

            <Route
                path="/category/update"
                element={<Private component={UpdateCategory} />}
            />

            <Route
                path="/ingredient/update"
                element={<Private component={UpdateIngredient} />}
            />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

import React from "react";
import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Login from './Pages/Login';
import Product from './Pages/Product';
=======
import Login from "./Pages/Login";
>>>>>>> b3270d5ca0671ab5784431e4df6ba496b729e331

export default () => {
    return (
        <Routes>
<<<<<<< HEAD
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            
=======
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Login />} />
>>>>>>> b3270d5ca0671ab5784431e4df6ba496b729e331
        </Routes>
    );
};

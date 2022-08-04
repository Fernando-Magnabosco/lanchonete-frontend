import React from "react";
import { Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from "./Pages/Home";
=======
<<<<<<< HEAD
import Login from './Pages/Login';
import Product from './Pages/Product';
=======
>>>>>>> 6d1f63fc1e54a5a231fe1e286f4165136ef2a172
import Login from "./Pages/Login";
>>>>>>> b3270d5ca0671ab5784431e4df6ba496b729e331

export default () => {
    return (
        <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
=======
<<<<<<< HEAD
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            
=======
>>>>>>> 6d1f63fc1e54a5a231fe1e286f4165136ef2a172
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Login />} />
>>>>>>> b3270d5ca0671ab5784431e4df6ba496b729e331
        </Routes>
    );
};

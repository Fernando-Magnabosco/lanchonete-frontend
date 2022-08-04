import React from "react";
import {Routes, Route} from 'react-router-dom';

import Login from './Pages/Login';
import Product from './Pages/Product';

export default () => {
    return (
        <Routes>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            
        </Routes>
    );
}
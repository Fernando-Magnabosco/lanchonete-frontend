import React from "react";
import {Routes, Route} from 'react-router-dom';

import Login from './Pages/Login';

export default () => {
    return (
        <Routes>
            
            <Route path="/login" element={<Login/>}/>
            
        </Routes>
    );
}
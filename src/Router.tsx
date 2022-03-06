import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Coin from "./routes/Detail";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:coinId/*" element={<Coin/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

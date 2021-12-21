import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function Router({propsModal, Indebteds}){
    return(
        <Routes>
            <Route path="/" exact element={<Home HandleModal={propsModal} data={Indebteds} />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
    )
}
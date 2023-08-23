import React from 'react';
import {Route, Routes } from "react-router-dom";
import ShowProducts from '../pages/ShowProducts';
import Home from '../pages/Home'
import CreateProduct from '../pages/CreateProduct'
import { Container } from "react-bootstrap";

const AppRoutes = () => {
    return (
        <>
         <Container>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/create' element={<CreateProduct/>} />
                <Route path='/show' element={<ShowProducts/>} />
            </Routes>
        </Container>
    </>
);
}

export default AppRoutes;

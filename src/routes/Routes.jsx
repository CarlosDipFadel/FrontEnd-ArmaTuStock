import React from 'react';
import {Routes as Rutas, Route } from 'react-router-dom'
import ShowProducts from '../pages/ShowProducts';
import Home from '../pages/Home'
import CreateProduct from '../pages/CreateProduct'

const Routes = () => {
    return (
        <>
            <Rutas>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateProduct />} />
                <Route path='/show' element={<ShowProducts />} />
            </Rutas>
        </>
    );
}

export default Routes;

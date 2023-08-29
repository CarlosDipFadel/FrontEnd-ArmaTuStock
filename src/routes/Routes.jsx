import React from 'react';
<<<<<<< HEAD
import { Route, Routes as Rutas} from "react-router-dom";
=======
import {Routes as Rutas, Route } from 'react-router-dom'
>>>>>>> ca9256383f4fb3921a1aef8564addb22bc600d1f
import ShowProducts from '../pages/ShowProducts';
import Home from '../pages/Home'
import CreateProduct from '../pages/CreateProduct'

const Routes = () => {
    return (
        <>
<<<<<<< HEAD
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/create' element={<CreateProduct/>} />
                <Route path='/show' element={<ShowProducts/>} />
            </Routes>
=======
            <Rutas>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateProduct />} />
                <Route path='/show' element={<ShowProducts />} />
            </Rutas>
>>>>>>> ca9256383f4fb3921a1aef8564addb22bc600d1f
        </>
    );
}

<<<<<<< HEAD
export default Routes;
=======
export default Routes;
>>>>>>> ca9256383f4fb3921a1aef8564addb22bc600d1f

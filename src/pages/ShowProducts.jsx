import React, { useEffect, useState } from 'react';
import Table from '../components/Table/Table';
import axios from 'axios';

const ShowProducts = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/getProducts')
        .then(response => {
            // Actualizar el estado con los productos obtenidos del backend
            setItems(response.data);
        });
    }, []);

    const editItem = (id, data) => {
        console.log(data);
        axios.put('/updateProduct', {
            id: id,
            data: data
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> Productos en sitema </h1>

            <div className='container mt-3'>
                {
                    items.length > 0 ?
                        <Table items={items} editItem={editItem} />
                        :
                        <h2 style={{ textAlign: 'center' }}> No hay productos en el sitema </h2>
                }
            </div>
        </div>
    );
}

export default ShowProducts;

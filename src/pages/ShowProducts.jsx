import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios.config';
import Table from '../components/Table/Table';

const ShowProducts = () => {

    const [items, setItems] = useState([]);

    const editItem = (id, data) => {
        console.log(data);
        // TODO aca vamos a hacer un put
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

import React, {useState} from 'react';
import Modal from '../Modal/Modal';

const ItemTable = ({item, editItem}) => {
    const {nombre, precio, stock, id, category} = item
    const [modalShow, setModalShow] = useState(false);


    return (
        <>
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{stock}</td>
            <td style={{display: 'flex', justifyContent:'space-evenly'}}> 
                <i style={{cursor:'pointer'}} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i> 
                <i style={{cursor:'pointer'}} className="bi bi-trash3-fill"></i> 
            </td>
        </tr>
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            item={item}
            onSubmit={editItem}
        />
        </>
    );
}

export default ItemTable;

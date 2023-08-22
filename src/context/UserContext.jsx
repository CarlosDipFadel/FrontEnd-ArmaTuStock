import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UsuariosContext = createContext()  

const UserContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState(null)

    const loginUser = async (userName, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL}/api/login`, {
                user: userName,
                password: password
            })
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response);
            return {success: true};
        } catch (error) {
            console.log(error);
            return {success: false, message: error.response.data};
        }
    }

    const getUsuarios = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}/api/users/getUsers`)
            return response.data
        } catch (error) {
            return error.response.data;
        }
    }

    const getRoles = async () =>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}/api/users/getRoles`)
            return response.data;
        } catch (error) {
            return error;
        }
    }

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios, loginUser, getUsuarios, getRoles }}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext
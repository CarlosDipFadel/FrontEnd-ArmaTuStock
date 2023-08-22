import { createContext, useEffect, useState } from 'react'

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
            return {success: true};
        } catch (error) {
            return {success: false, message: error.response.data};
        }
    }

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios, loginUser }}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext
import { createContext, useEffect, useState } from 'react'

export const UsuariosContext = createContext()  

const UserContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState([])

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios }}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext
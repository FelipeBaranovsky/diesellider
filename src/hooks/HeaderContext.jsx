import React, { useEffect, useState } from 'react'
const HeaderContext = React.createContext([{}, ()=>{}])

const HeaderProvider = (props) => {
    const [modal, setModal] = useState(false)
    const [actualPage, setActualPage] = useState("Login")
    const [isLandscape, setIsLandscape] = useState(false)
    
    //Abrir-Cerrar Usuario
    const handleModal = () => {
        setModal(!modal)
    }

    //Cambiar Página actual
    const handleActualPage = (page) => {
        setActualPage(page)
    }

    return (
        <HeaderContext.Provider value={[modal,handleModal, actualPage, handleActualPage]}>
            {props.children}
        </HeaderContext.Provider>
    )      
}

export {HeaderContext, HeaderProvider}
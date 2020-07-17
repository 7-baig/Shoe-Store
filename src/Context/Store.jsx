import React, { createContext, useState } from 'react'

export const Store = createContext({})


const StoreProvider = ({ children }) => {
    const [value, setValue] = useState()
    
    return (
    <Store.Provider
        value={[value, setValue]}
    >
        { children }
    </Store.Provider>
    )
}

export default StoreProvider
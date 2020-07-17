import React, { createContext, useState } from 'react'

export const CartContext = createContext()


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [product, setProduct] = useState([])
    
    return (
    <CartContext.Provider
        value={[cart, setCart], [product, setProduct]}
    >
        { children }
    </CartContext.Provider>
    )
}

export default CartProvider

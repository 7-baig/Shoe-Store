import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartCard from '../../components/CartCard/CartCard'
import styles from './Cart.module.css'

const Cart = () => {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div className={styles.container} >

            {/* PRODUCT CARDS */}
            
            <div className={styles.left} >
                <h2>YOUR CART ({cart.length} items)</h2>
                {
                    cart.length !== 0
                    ?
                    cart.map(item => <CartCard key={item.id} number={item.id} name={item.name} url={item.url} price={item.price} qty={item.qty} /> )
                    : null
                }
            </div>

            {/* ORDER SUMMARY */}   

            <div className={styles.right} >
                <h1>ORDER SUMMARY</h1>
                <span className={styles.subtotal}>
                    <h4>Item Subtotal</h4>
                    <h4>${ cart.reduce((acc, curr) => acc + curr.price, 0) }</h4>
                </span>
                <span className={styles.shipping}>
                    <h4>Shipping</h4>
                    <h4>Free</h4>
                </span>
                <span className={styles.total}>
                    <h4>Estimated Total</h4>
                    <h4>${ cart.reduce((acc, curr) => acc + curr.price, 0) }</h4>
                </span>
                <button>PROCEED TO CHECKOUT</button>
                <button>CHECKOUT WITH PAYPAL</button>
            </div>  

        </div>
    )

}

export default Cart
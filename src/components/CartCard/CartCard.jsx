import React, { useContext } from 'react'
import styles from './CartCard.module.css'
import { CartContext } from '../../Context/CartContext'


const CartCard = ({ name, url, price, qty }) => {

    const [cart, setCart] = useContext(CartContext)

    const handleClick = () => {
        setCart(cart.filter(e => e.name !== name))
    }




    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <img src={url} alt={name} />
            </div>

            <div className={styles.right}>

                <span className={styles.rightTop} >
                    <h3>{name}</h3>
                </span>

                <div className={styles.rightBottom} >
                    <span>
                        <h4>Price</h4>
                        <h4 className={styles.price} >${price}</h4>
                    </span>
                    <button onClick={handleClick}>Remove</button>
                </div>

            </div>  

        </div>
    )
}

export default CartCard
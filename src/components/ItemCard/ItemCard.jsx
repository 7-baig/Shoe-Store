import React, { useContext } from 'react'
import styles from './ItemCard.module.css'
import { Link } from 'react-router-dom'
import { Store } from '../../Context/Store'
import { CartContext } from '../../Context/CartContext'
import Zoom from 'react-reveal/Zoom';


const ItemCard = ({ name, url, price, id, qty }) => {

    const [value, setValue] = useContext(Store)
    const [cart, setCart] = useContext(CartContext)
    
    const handleClick = () => {
        setValue({...value, name, url, price})
    }

    const handleCart = () => {
        const item = {name, url, price, qty}
        const existingProduct = cart.filter(item => item.name === name)
        const withoutExistingProduct = cart.filter(item => item.name !== name)
        
        if(existingProduct.length === 0)
            {
                setCart([...withoutExistingProduct, item])
            }
        console.log(existingProduct)
        console.log(withoutExistingProduct)
    }

    return (
        <Zoom left>
            <div className={styles.container} >
                <img src={url} alt={name} />
                <div className={styles.namePrice} >
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                </div>
                <div className={styles.buttons} >
                        <button
                            onClick={handleCart}   
                        >
                            Add to cart
                        </button>

                    <Link to={`/${id}`} >
                        <button
                            onClick={handleClick}
                        >
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </Zoom>
    )

}

export default ItemCard

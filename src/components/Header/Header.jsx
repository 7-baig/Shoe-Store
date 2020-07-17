import React, { useState, useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const Header = () => {

    const [ value, setValue ] = useState('')
    const [cart, setCart] = useContext(CartContext)

    return (
        <div className={styles.container} >

{/* Top Portion */}
            <div className={styles.topPortion} >

                {/* Search Field */}
                <form className={styles.form} >
                    <input 
                        type="text" 
                        name="search" 
                        value={value} 
                        placeholder="Search"
                        onChange={e => setValue(e.target.value)} 
                    />
                    <button className={styles.btn}> 
                        <i className="fas fa-search" style={{ fontSize: '15px', color : 'rgb(201, 199, 199)' }}>
                        </i> 
                    </button>
                </form>
                {/* heading */}
                <h1 className={styles.heading} >Shoe Store</h1>
                {/* icons Container*/}
                <div className={styles.iconsContainer} >

                    <i className="fas fa-user" style={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }} ></i>

                    <i className="far fa-heart" style={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }} ></i>

                    <Link 
                        to="/cart" 
                        style={cart.length !== 0 ?
                            { textDecoration:'none', color: 'red' } 
                            :
                            { textDecoration:'none', color: 'black' }  
                        } 
                    >
                        <i className="fas fa-shopping-cart" style={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }} ></i>
                    </Link>

                </div>

            </div>
             
{/* Bottom Portion */}

            <div className={styles.bottomPortion}>
                <ul className={styles.list}>
                    <li><Link to="/" style={{ textDecoration: 'none',color: 'black' }}>Home</Link></li>
                    <li><Link to="/" style={{ textDecoration: 'none',color: 'black' }}>About</Link></li>
                    <li><Link to="shop" style={{ textDecoration: 'none',color: 'black' }}>Shop</Link></li>
                    <li><Link to="/" style={{ textDecoration: 'none',color: 'black' }}>New Arrivals</Link></li>
                    <li><Link to="/" style={{ textDecoration: 'none',color: 'black' }}>Contact</Link></li>
                    <li><Link to="/cart" style={{ textDecoration: 'none',color: 'black' }}>Cart</Link></li>
                </ul>
                {/* <i class="fas fa-bars" style={{ display: "none" }} ></i> */}
            </div>

        </div>
    )
}

export default Header
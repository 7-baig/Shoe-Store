import React from 'react'
import Zoom from 'react-reveal/Zoom';
import styles from './MainContainer.module.css'
import image from '../../images/shoe.png'
import  { Link } from 'react-router-dom'

const MainContainer = () => {
    return (
        <div className={styles.container} >

            {/* left portion */}
            <div className={styles.leftPortion}>
                <Zoom left>
                    <img src={image} alt="shoe-image"/>
                </Zoom>
            </div>

            {/* right portion */}
            <div className={styles.rightPortion}>
                <Zoom right>
                    <div className={styles.rightPortionContent}>
                        <h1>Finding Your Perfect Shoes</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consequuntur atque sed fugit velit dicta possimus obcaecati esse deserunt, numquam odit.</p>
                        <button> 
                            <Link to="shop" style={{ textDecoration: 'none', color: '#dfddee' }}>Shop Now</Link>
                        </button>
                    </div>
                </Zoom>
            </div>

        </div>
    )
}

export default MainContainer
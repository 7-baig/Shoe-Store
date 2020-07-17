import React, { useContext } from 'react'
import styles from './ItemPage.module.css'
import image from '../../images/NMD-R1-SHOES.jpg'
import { Store } from '../../Context/Store'

const ItemPage = () => {
    
    const [value, setValue] = useContext(Store)
    const { name, url, price } = value
    console.log(value)  

    return (

        <div className={styles.container}>

            <div className={styles.cardContainer}>
                <div className={styles.left} >
                    <img src={url} alt="shoe-pic"/>
                </div>
                <div className={styles.right} >
                    <div className={styles.rightContentContainer} >
                        <h1>{name}</h1>
                        <h2>${price}</h2>
                        <h4>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque corrupti quod tempore? Consequatur molestiae cupiditate aut dolore quia officiis facilis, deserunt cumque pariatur sunt praesentium illum! Commodi, eius fugiat?
                        </h4>
                        <button>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ItemPage
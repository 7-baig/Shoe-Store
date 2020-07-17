import React from 'react'
import styles from './ShopContainer.module.css'
import { Items } from './Items'
import ItemCard from '../ItemCard/ItemCard'

const ShopContainer = () => {


    return (

        <div className={styles.container} >

            {
                Items.map(item => <ItemCard key={item.id} id={item.id} url={item.url} name={item.name} price={item.price} qty={item.qty} />)
            }

        </div>

    )
}

export default ShopContainer
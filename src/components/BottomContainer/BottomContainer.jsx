import React from 'react'
import styles from './BottomContainer.module.css'


const BottomContainer = () => {
    return (
        <div className={styles.container} >

            <div className={styles.cardsContainer}>

                <div className={styles.cards}>
                    <div className={styles.left}>
                        <i className="fas fa-truck"></i>
                    </div>
                    <div className={styles.right}>
                        <h4>FREE SHIPPING</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem deserunt saepe voluptates animi facilis minus</p>
                    </div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.left}>
                        <i className="fas fa-undo-alt"></i> 
                    </div>
                    <div className={styles.right}>
                        <h4>FREE RETURNS</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem deserunt saepe voluptates animi facilis minus</p>
                    </div>
                </div>

                <div className={styles.cards}>
                    <div className={styles.left}>
                        <i className="fas fa-question-circle"></i>
                    </div>
                    <div className={styles.right}>
                        <h4>CUSTOMER SUPPORT</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem deserunt saepe voluptates animi facilis minus</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default BottomContainer
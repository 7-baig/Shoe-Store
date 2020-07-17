import React from 'react'
import styles from './Home.module.css'
import MainContainer from '../../components/MainContainer/MainContainer'
import BottomContainer from '../../components/BottomContainer/BottomContainer'

const Home = () => {
    return (
        <div className={styles.container} >

            <MainContainer />
            <BottomContainer />

        </div>
    )
}

export default Home
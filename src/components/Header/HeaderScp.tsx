import React from 'react'
import styles from './HeaderStl.module.css'



const HeaderComp: React.FC<OwnProps> = () => {
    return (
        <div className={styles.header_comp}>
            <div className={styles.header_comp_container}>
                <ul>
                    <li>
                        <a href="#">Carousel</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default HeaderComp

type OwnProps = {}
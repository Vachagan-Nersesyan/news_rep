import React from 'react'
import styles from './HeaderStl.module.css'

import DropDownComp from '../DropdownComp'



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
                <div>
                    <DropDownComp />
                </div>
            </div>

        </div>
    )
}

export default HeaderComp

type OwnProps = {}
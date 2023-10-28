import React from 'react'
import styles from './HeaderStl.module.css'

import DropDownComp from '../DropdownComp'
import SearchScp from '../SearchComp/SearchScp'
import { SearchAutoCompleteType } from '../AppComp/AppScp'



const HeaderComp: React.FC<OwnProps> = ({ searchAutoComplete }) => {
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
                    <SearchScp searchAutoComplete={searchAutoComplete} />
                </div>
                <div>
                    <DropDownComp />
                </div>
            </div>

        </div>
    )
}

export default HeaderComp

type OwnProps = {
    searchAutoComplete: Array<SearchAutoCompleteType>,
}
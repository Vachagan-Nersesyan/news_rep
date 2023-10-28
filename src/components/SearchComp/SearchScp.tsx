import React, { useState } from 'react'
import styles from './SearchStl.module.css'
import { SearchAutoCompleteType } from '../AppComp/AppScp'


const SearchScp: React.FC<OwnProps> = ({ searchAutoComplete }) => {

    const [inpDrpShow, setInpDrpShow] = useState<boolean>(false)


    const [itemsArr, setItemsArr] = useState<Array<SearchAutoCompleteType>>(searchAutoComplete)

    const searchFunc: (str: string) => void = (str) => {
        setItemsArr(searchAutoComplete.filter((val) => val.text.includes(str)).sort(function(a, b){return b.rating - a.rating}))
    }

    return (
        <div className={styles.search_content}>
            <div className={styles.search_content_in_item_1}>
                <input type="text" onClick={() => setInpDrpShow(!inpDrpShow)} onChange={(e) => searchFunc(e.target.value)} />
                {
                    inpDrpShow
                        ?
                        <div className={styles.search_content_in_item_1_in_1_item}>
                            {
                                itemsArr.map((val) => {
                                    return (
                                        <div className={styles.search_content_in_item_1_in_1_item_itm}>
                                            {val.text}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                }

            </div>
            <div className={styles.search_content_in_item_2}>
                <input type="submit" value='Search' />
            </div>
        </div>
    )
}


export default SearchScp

type OwnProps = {
    searchAutoComplete: Array<SearchAutoCompleteType>,
}
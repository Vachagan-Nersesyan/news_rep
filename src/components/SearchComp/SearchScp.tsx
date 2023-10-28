import React, { useState } from 'react'
import styles from './SearchStl.module.css'
import { SearchAutoCompleteType } from '../AppComp/AppScp'


const SearchScp: React.FC<OwnProps> = ({ searchAutoComplete, searchFunc }) => {

    const [inpDrpShow, setInpDrpShow] = useState<boolean>(false)


    return (
        <div className={styles.search_content}>
            <div className={styles.search_content_in_item_1}>
                <input type="text" onClick={() => setInpDrpShow(!inpDrpShow)} onChange={(e) => searchFunc(e.target.value)} />
                {
                    inpDrpShow
                        ?
                        <div className={styles.search_content_in_item_1_in_1_item}>
                            {
                                searchAutoComplete.map((val) => {
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
    searchFunc: ( str: string) => void

}
import React, { useRef, useState } from 'react'
import styles from './SearchStl.module.css'
import { SearchAutoCompleteType } from '../AppComp/AppScp'


const SearchScp: React.FC<OwnProps> = ({ searchAutoComplete }) => {

    const [inpDrpShow, setInpDrpShow] = useState<boolean>(false)


    const [ss, setSS] = useState<boolean>(false)



    const [itemsArr, setItemsArr] = useState<Array<SearchAutoCompleteType>>(searchAutoComplete.sort(function (a, b) { return b.rating - a.rating }).slice(0, 3))

    const searchFunc: (str: string) => void = (str) => {
        setItemsArr(searchAutoComplete.filter((val) => val.text.includes(str)).sort(function (a, b) { return b.rating - a.rating }))
    }

    const inputRef = useRef(null);




    return (
        <div className={styles.search_content}>
            <div className={styles.search_content_in_item_1}>
                <input ref={inputRef} type="text" onClick={() => setInpDrpShow(true) } onChange={(e) => searchFunc(e.target.value)} />
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
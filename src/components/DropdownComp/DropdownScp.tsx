import React, { useState } from 'react'
import style from './DropdownStl.module.css'

import { FaAngleUp, FaAngleDown } from "react-icons/fa6"

const DropDownComp: React.FC<OwnProps> = () => {

    const [showDrowdownContent, setShowDrowdownConte] = useState<boolean>(false)


    return (
        <div className={style.dropdown_content}>
            <div className={style.dropdown_content_title} onClick={() => setShowDrowdownConte(!showDrowdownContent)}>
                down
                {
                    showDrowdownContent
                        ?
                        <FaAngleUp />
                        :
                        <FaAngleDown />

                }
            </div>
            {
                showDrowdownContent
                    ?
                    <div className={style.dropdown_content_items}>
                        <div className={style.dropdown_content_items_1_item}>
                            <a href="#">first link</a>
                        </div>
                        <div className={style.dropdown_content_items_1_item}>
                            <a href="#">first link</a>
                        </div>
                        <div className={style.dropdown_content_items_1_item}>
                            <a href="#">first link</a>
                        </div>
                    </div>
                    :
                    null
            }

        </div>
    )
}


export default DropDownComp


type OwnProps = {}
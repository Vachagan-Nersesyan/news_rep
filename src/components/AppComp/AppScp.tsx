import React from 'react'
import styles from './AppStl.module.css'

import HeaderComp from '../Header'
import CardComp from '../CardComp'


const App: React.FC<OwnProps> = () => {

    let cardInfo = [
        {
            id: 0,
            title:'card title',
            text : 'asdfasdfasdfasdf',
            picture : '../images/cardImages/1.jpg',
            publishDate : '20.04.2023'
        },
        {
            id: 1,
            title:'card title 2',
            text : 'asdfasdfasdfasdf',
            picture : '../images/cardImages/1.jpg',
            publishDate : '20.04.2023'
        },
        {
            id: 2,
            title:'card title 3',
            text : 'asdfasdfasdfasdf',
            picture : '../images/cardImages/1.jpg',
            publishDate : '20.04.2023'
        },
        {
            id: 3,
            title:'card title 4',
            text : 'asdfasdfasdfasdf',
            picture : '../images/cardImages/1.jpg',
            publishDate : '20.04.2023'
        }
    ]

    return (
        <>
            <HeaderComp />
            <CardComp cardInfo={cardInfo}  />
        </>
    )
}

export default App

type OwnProps = {}
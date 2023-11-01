import React, { useRef, useState } from 'react'
import styles from './AppStl.module.css'

import HeaderComp from '../Header'
import CardComp from '../CardComp'
import Test from '../../Test'
import TextComp from '../../TextComp'

const App: React.FC<OwnProps> = () => {

    let cardInfo = [
        {
            id: 0,
            title: 'card title',
            text: 'asdfasdfasdfasdf',
            picture: '../images/cardImages/1.jpg',
            publishDate: '20.04.2023'
        },
        {
            id: 1,
            title: 'card title 2',
            text: 'asdfasdfasdfasdf',
            picture: '../images/cardImages/1.jpg',
            publishDate: '20.04.2023'
        },
        {
            id: 2,
            title: 'card title 3',
            text: 'asdfasdfasdfasdf',
            picture: '../images/cardImages/1.jpg',
            publishDate: '20.04.2023'
        },
        {
            id: 3,
            title: 'card title 4',
            text: 'asdfasdfasdfasdf',
            picture: '../images/cardImages/1.jpg',
            publishDate: '20.04.2023'
        }
    ]

    let searchAutoComplete: Array<SearchAutoCompleteType> = [
        {
            id: 0,
            text: 'Hello',
            rating: 0.3
        },
        {
            id: 1,
            text: 'test',
            rating: 0.5
        },
        {
            id: 2,
            text: 'bye',
            rating: 1
        },
        {
            id: 3,
            text: 'how are you',
            rating: 0.2
        },
        {
            id: 4,
            text: 'goodbye',
            rating: 0.9
        },
        {
            id: 5,
            text: 'clock',
            rating: 0.1
        },
        {
            id: 6,
            text: 'table',
            rating: 0.2
        },
        {
            id: 7,
            text: 'glass',
            rating: 0.6
        },
    ]



    return (
        <>
            <HeaderComp searchAutoComplete={searchAutoComplete} />
            <CardComp cardInfo={cardInfo} />
            <Test />
            <TextComp />
        </>
    )
}

export default App

type OwnProps = {}

export type SearchAutoCompleteType = {
    id: number,
    text: string,
    rating: number
}
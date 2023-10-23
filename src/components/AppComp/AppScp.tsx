import React from 'react'
import styles from './AppStl.module.css'

import HeaderComp from '../Header'

const App : React.FC<OwnProps> = () => {
    return (
        <HeaderComp />
    )
}

export default App

type OwnProps = {}
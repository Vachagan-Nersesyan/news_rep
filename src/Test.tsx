import React, { useState, useEffect } from 'react'


const Test: React.FC = () => {

    let o 
    let o1

    const [screenInfo, setScreenInfo] = useState({
        width: window.innerWidth,
        height: window.innerHeight,

    })

    useEffect(() => {
        setScreenInfo({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [o,o1])

    window.addEventListener('resize', function (event) {
        o = window.innerWidth
        o1 = window.innerHeight
        console.log(o)
        console.log(o1)

    }, true);

    

    return (
        <div>
            <div>
                width : {screenInfo.width}
            </div>
            <div>
                height : {screenInfo.height}
            </div>

        </div>
    )
}

export default Test
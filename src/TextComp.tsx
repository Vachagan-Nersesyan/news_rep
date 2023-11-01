import React, { useState, useEffect } from 'react'


const TextComp: React.FC = () => {

    const [status, setStatus] = useState<string>('')


    useEffect(() => {


        const fetchData = async () => {
            const data = await fetch('https://api.quotable.io/random')
            let response = await data.json();
            setStatus(response.content)
        }

        fetchData();


    }, [])

    return (
        <div>
            {status}

        </div>
    )
}

export default TextComp
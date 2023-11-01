import React, { useState, useEffect } from 'react'


const TextComp: React.FC = () => {

    const [status, setStatus] = useState<StatusType>({
        author: '',
        content: ''
    })


    useEffect(() => {


        const fetchData = async () => {
            const data = await fetch('https://api.quotable.io/random')
            let response = await data.json();
            console.log(response)
            setStatus({
                author: response.author,
                content: response.content
            })
        }

        fetchData();


    }, [])

    return (
        <div>
            {status.author}
            {status.content}


        </div>
    )
}

export default TextComp


type StatusType = {
    author: string,
    content: string
}
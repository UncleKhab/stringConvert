import React, {useState, useEffect} from 'react'

export default function TheState(){
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))

    }, [resourceType])

    return(
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>Blog</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('todos')}>Todos</button>
            </div>
            <div>
                {items.map((item)=> {
                    return <p key={item.id}>{JSON.stringify(item)}</p>
                })}
            </div>
        </div>
    )
}
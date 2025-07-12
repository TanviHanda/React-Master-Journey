import React, { useEffect, useState } from 'react'
import { GiH2O } from 'react-icons/gi'

const FetchData = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            setPosts(result)
        }
        fetchData()
    })
  return (
    <div>
        <h1>First post title:</h1>
        {posts.length > 0 ? <h2>{posts[0].title }</h2>:<p>Loading...</p>}
    </div>
  )
}

export default FetchData
import React from 'react'

const UserList = () => {
    const users = [
        {
            id:1,
            Name:"Alice",
            age:25
        },
        {
            id:2,
            Name:"Bob",
            age:30
        },
        {
            id:3,
            Name:"Charlie",
            age:22
        }
    ]
  return (
    <div>
        {users.map((items)=>(
            <ul key={items}>
            <li>{items.id}</li>
            <li>{items.Name}</li>
            <li>{items.age}</li>
        </ul>
        ))}
    </div>
  )
}

export default UserList
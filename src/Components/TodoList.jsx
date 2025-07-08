import React, { useState } from 'react'

const TodoList = () => {
    const [create,setCreate] = useState([])
    const [inputValue,setInputValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(inputValue.trim()){
            setCreate([...create,inputValue])
            setInputValue("");
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value)
    }
  return (
    <div>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue}  onChange={handleChange} placeholder='Add a new Todo'/>
            <button type='submit'Add Todo>Add task</button>
        </form>
        <ul>
            {create.map((create,index)=>(
                <li key={index}>{create}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
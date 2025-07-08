import React from 'react'
import Counter from './Components/Counter'
import TodoList from './Components/TodoList'
import Profile from './Components/Profile'
import Notes from './Components/Notes'

const App = () => {
  return (
    <div>
      <Notes/>
      <Counter/>
      <TodoList/>
      <Profile/>
    </div>
  )
}

export default App
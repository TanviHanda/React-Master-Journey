import React from 'react'

const Greeting = () => {
    const greet = "Hello everyone , How are you all?"
    const currentDate = new Date();
  return (
    <div>
        <h1>{greet}</h1>
        <p>Date: {currentDate.getDate()}</p>
    </div>
  )
}

export default Greeting
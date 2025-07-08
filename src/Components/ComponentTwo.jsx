import React from 'react'

const ComponentTwo = ({count,onClickHandler}) => {
    const dechandleClick = () => onClickHandler()
  return (
    <div>
        <p>{count}</p>
        <button onClick={dechandleClick}>Increment</button>
    </div>
  )
}

export default ComponentTwo
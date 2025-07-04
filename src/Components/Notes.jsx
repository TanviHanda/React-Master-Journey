import React from 'react'

const Notes = () => {
  return (
    <div>
        <h1>LISTS</h1>
        <p>In React, you will render lists with some type of loop. The Js map() array method is generally the preffered method.</p>
        <h1>PROPS</h1>
        <ul>
          <li>Props / Properties are arguments passed into React components.</li>
          <li>Props allows us to pass data from parent component to a child component.</li>
          <li>Props are passed to components via HTML attributes.</li>
        </ul>
        <h1>CONDITIONAL RENDERING</h1>
        <p>It allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experience.</p>
        <hr/>
    </div>
  )
}

export default Notes
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
        <ul>
          <li>STATE HOOKS
            <ul>
              <li><p>State is a way to store and mange data that can change over time and affects how the component renders.We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.</p>
                <ul>
                  <li>What is a HOOK?
                    <ul>
                      <li><p>Hooks are a new addition in React 16.8 . Tjey let you use state and other React features without writing a class.</p>
                        <ul>
                          <li>useState()
                            <ul>
                              <li>
                                <p>It allows us to track state in a functional component. State generally refers to data or properties that need to be tracking in an application</p>
                              </li>
                            </ul>
                          </li>
                          <li></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
       
      
    </div>
  )
}

export default Notes
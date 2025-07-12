import React from 'react'
import { useContext } from 'react'
import { Data } from '../App'
import { Data1 } from '../App'
const ComponentC = () => {
  const username = useContext(Data)
  const Age = useContext(Data1)
  return (
    // <Data.Consumer>
    //   {(name)=>{
    //     // return <h1>{name}</h1>
    //     return (
    //       <Data1.Consumer>
    //         {(age)=>{
    //           return(
    //              <h1>My name is {name} and I am {age} years old.</h1>
    //           )
    //         }}
    //       </Data1.Consumer>
    //     )
    //   }}
    // </Data.Consumer>
    <h1>My name is {username} and I'm {Age} years old.</h1>
  )
}

export default ComponentC
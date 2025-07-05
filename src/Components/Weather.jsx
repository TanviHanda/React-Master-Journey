import React from 'react'

const Weather = () => {
  let temp = 26;
  if(temp<15){
    return <h1>It's cold outside</h1>
  }
  else if(temp>=15 && temp<=25){
    return <h1>it's nice outside</h1>
  }
  else if(temp>24){
    return <h1>it's hot outside</h1>
  }
}

export default Weather
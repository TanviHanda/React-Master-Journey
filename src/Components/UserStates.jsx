import React from 'react'

const UserStates = (props) => {
  if(props.loggedIn && props.isadmin){
    return <h1>welcome admin</h1>
  }
  else{
    return <h1>welsome user</h1>
  }
}

export default UserStates
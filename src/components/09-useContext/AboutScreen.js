import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const {user, setUser} = useContext(UserContext)

  const handleClick = () => {
    setUser({});
  }

  return (
    <div>
      <h1>About Screen</h1>
      <hr></hr>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
      <button type="button" 
        onClick= {handleClick}
        className="btn btn-primary">Logout</button>
    </div>
  )
}

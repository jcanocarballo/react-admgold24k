import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);

  return (
    <div>
      <h1>Login Screen</h1>
      <hr></hr>
      <button type="button" 
        onClick={ () => setUser({
          id: 1234,
          name: 'Julian Cano'
        })}
        className="btn btn-primary">Login</button>
    </div>
  )
}

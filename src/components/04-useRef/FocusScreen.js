import React, { useRef } from 'react'
import './focusScreen.css'

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = (e) => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input
        ref= { inputRef }
        className="form-control"
        placeholder="Su nombre"  
      >
      </input>
      <button 
        onClick={ handleClick }
        type="button" className="btn btn-primary mt-3">Aceptar</button>
    </div>
  )
}

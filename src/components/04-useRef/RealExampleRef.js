import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './focusScreen.css'
export const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>
      <br></br>

      { show && <MultipleCustomHooks></MultipleCustomHooks>}

      <button 
        onClick={
          () => {
            setShow(!show)
          }
        }
        type="button" className="btn btn-primary mt-3">
        Show/Hide
      </button>
    </div>
  )
}

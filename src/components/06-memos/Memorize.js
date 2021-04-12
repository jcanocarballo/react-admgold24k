import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './memorize.css'
import { Small } from './Small';

export const Memorize = () => {

  const {counter, increment} =  useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr></hr>
      <h2>Counter: <Small value= {counter}> </Small></h2>

      <button type="button" 
        className="btn btn-primary"
        onClick= {increment}
      >Incrementar</button>

      <button type="button" 
        className="btn btn-outline-primary ml-3"
        onClick= {
          () => {
            setShow(!show);
          }
        }
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

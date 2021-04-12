import React from 'react'
import { useCouter } from '../../hooks/useCouter'

export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset} = useCouter(100);

  return (
    <>
      <h1>Couter with Hook: {state}</h1>
      <button class="btn btn-primary" 
        onClick={() => increment(2)}>
        increment <span class="badge badge-primary"></span>
      </button>
      <button class="btn btn-primary" 
        onClick={reset}>
        reset <span class="badge badge-primary"></span>
      </button>
      <button class="btn btn-primary"
        onClick={() => decrement(2)}>
        decrement <span class="badge badge-primary"></span>
      </button>
    </>
  )
}

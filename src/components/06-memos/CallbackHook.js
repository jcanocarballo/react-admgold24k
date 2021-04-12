import React, { useCallback, useEffect, useState } from 'react'
import './callbackHook.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback((num) => {
      setCounter(c => c + num);
    },[setCounter],
  )

  useEffect(() => {
  }, [increment])

  return (
    <div>
      <h1>useCallBack Hook: {counter}</h1>
      <hr></hr>

      <ShowIncrement increment= {increment}></ShowIncrement>

    </div>
  )
}

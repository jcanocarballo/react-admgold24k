import { useState } from "react"

export const useCounter = (initialState = 10) => {
  const [counter, setCouter] = useState(initialState);

  const increment = () => {
    setCouter(counter + 1)
  }

  const decrement = () => {
    setCouter(counter - 1)
  }

  const reset = () => {
    setCouter(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

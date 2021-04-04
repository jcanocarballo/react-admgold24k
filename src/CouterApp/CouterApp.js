import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CouterApp = ({value = 10}) => {

  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  const handleRemove = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button onClick={handleAdd}>
        ADD
      </button>
      <button onClick={handleReset}>
        RESET
      </button>
      <button onClick={handleRemove}>
        REMOVE
      </button>
    </div>
  )
}

CouterApp.propTypes = {
  value: PropTypes.number
}

export default CouterApp



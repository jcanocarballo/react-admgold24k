import React from 'react'
import PropTypes from 'prop-types'

function PrimerApp({saludo, subtitulo}) {
  return (
    <div>
      <h1>
        {saludo}
      </h1>
      <p>
        {subtitulo}
      </p>
    </div>
  )
}

PrimerApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimerApp


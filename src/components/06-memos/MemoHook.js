import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'
import './memorize.css'

export const MemoHook = () => {

  const {counter, increment} =  useCounter(50);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <hr></hr>
      <h2>Counter: <small>{counter}</small></h2>

      <p>
        {memoProcesoPesado}
      </p>

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

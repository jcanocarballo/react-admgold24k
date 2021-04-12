import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

  const { counter, increment } = useCouter(1);

  const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {quote} = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr></hr>
      <blockquote className="blockquote text-center">
        <p 
          className="mb-0"
          ref={pTag}  
        > { quote } </p>        
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button onClick={ increment } className="btn btn-primary">
              Siguiente frase <span className="badge badge-primary"></span>
      </button>
    </div>
  )
}

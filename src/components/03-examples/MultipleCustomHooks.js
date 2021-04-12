import React from 'react';
import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCouter(1);

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {
        loading
        ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <blockquote className="blockquote text-center">
              <p> { quote } </p>
          <footer className="blockquote-footer"> { author } </footer>
            </blockquote>
          )
      }
      <button onClick={ increment } className="btn btn-primary">
              Siguiente frase <span className="badge badge-primary"></span>
      </button>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './Effect.css'
export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email cambio');    
  }, [email])

  const haldleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={haldleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr></hr>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        >
        </input>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        >
        </input>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          value={password}
          onChange={handleInputChange}
        >
        </input>
      </div>
      <button type="submit" className="btn btn-primary">
              Guardar <span className="badge badge-primary"></span>
      </button>
    </form>
  )
}

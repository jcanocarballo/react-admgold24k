import React from 'react'
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
const { default: PrimerApp } = require("../PrimerApp");
import {shallow} from 'enzyme'

describe('Pruebas de componente PrimeraApp', () => {
  
  // test('debe mostrar el mensaje "Hola, soy Goku" ', () => {
  //   const saludo = 'Hola, soy Goku';
  //   const {getByText} = render(<PrimerApp saludo={saludo}></PrimerApp>)

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test('debe de mostar <Primera /> correctamente', () => {
    const saludo = 'Hola, soy Goku';
    const wraper = shallow(<PrimerApp saludo={saludo}></PrimerApp>);
    expect(wraper).toMatchSnapshot();
  });

  test('debe de mostar el subtitulo en viado por props', () => {
    const saludo = 'Hola, soy Goku';
    const subtitulo = 'Soy un subtitulo'
    const wraper = shallow(
      <PrimerApp 
        saludo={saludo}
        subtitulo= {subtitulo}
      ></PrimerApp>
    );

    const textoParrafo = wraper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);
    
  });
  
});
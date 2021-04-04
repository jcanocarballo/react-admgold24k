import '@testing-library/jest-dom'
const { getSaludo } = require("../../base/02-template-string")

describe('Pruebas en 02-template-string.test.js', () => {
  test('getSaludo debe de retornar Hola Julian! ', () => {
    const nombre = 'Julian'
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre + '!')
  })
  
  test('getSaludo debe de retornar Hola Julian! si no hay argumento en la funcion', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Julian!')
  })
  
})
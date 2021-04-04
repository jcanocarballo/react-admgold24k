const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Preubas en 07-deses-arra', () => {
  test('debe retornar un string y un numero', () => {
    const arr = retornaArreglo();

    expect(arr).toEqual(['ABC', 123])

  })
  
})
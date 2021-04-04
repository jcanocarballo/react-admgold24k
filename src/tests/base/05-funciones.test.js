const { getUser, getUsuarioActivo } = require("../../base/05-funciones")

describe('pruebas del archivo 05-funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect(user).toEqual(userTest);
  })
  
  test('getUsuarioActivo debe retornar un objeto', () => {
    const nombre = 'jcanoc';
    const userTest = {
      uid: 'ABC123',
      username: nombre
    }
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(user)
  })
  
})
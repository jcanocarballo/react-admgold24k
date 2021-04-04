const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas de archivo 09-promesas', () => {
  test('debe de retornar un heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then( heroe => {      
      expect(heroe).toBe(heroes[0]);
      done();
    })
  });

  test('debe de obtener un error si el héroe por id no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch( err => {
      expect(err).toBe('No se pudo encontrar el héroe');
      done();
    })
  });
  
})
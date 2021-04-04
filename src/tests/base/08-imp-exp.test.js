const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas del archivo 08-imp-exp', () => {
  test('debe de rotarnar un hero por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(h => h.id === id); 
    expect(heroe).toEqual(heroeData);
  });
  
  test('debe de rotarnar undefine si heroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arreglo con los héros de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter(h => h.owner === owner)
    expect(heroes).toEqual(heroesData);
  });

  test('debe de retornar un arreglo con los héros de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);    
    expect(heroes.length).toBe(2);
  })
  
})
const { getGifs } = require("../../helpers/getGits");

describe('Pruebas del archivo getGifs Fetch', () => {
  test('debe traer 10 elementos ', async () => {
    let gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });
  
  test('Prueba sin categoria ', async () => {
    let gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
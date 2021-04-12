import {shallow} from 'enzyme'
const { GifGridItem } = require("../../components/GifGridItem");

describe('Pruebas del componente GifGridItem', () =>{
  
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg'
  
  let wraper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);
  beforeEach( () => {
    wraper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);
  });

  test('debe mostrar el componente <GifGridItem /> correctamente', () => {
    expect(wraper).toMatchSnapshot();  
  });

  test('debe de tener un parrafo con el titulo', () => {
    const p = wraper.find('p').text();
    expect(p.trim()).toBe(title);
  });

  test('debe tener la imagen igual al url y alt de los props', () => {
    const img = wraper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener la clase animate__fadeIn ', () => {
    const div = wraper.find('div');
    const clase = div.prop('className');
    expect(clase.includes('animate__fadeIn')).toBe(true);
  });
  
});
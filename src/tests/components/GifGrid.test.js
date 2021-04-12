const { GifGrid } = require("../../components/GifGrid");
import {shallow} from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas del archivo GifGrid', () => {
  let category = 'hola mundo';
  // let wraper = shallow(<GifGrid category={category}></GifGrid>);
  // beforeEach( () => {
  //   wraper = shallow(<GifGrid category={category}></GifGrid>);
  // });
  test('ebe mostrar el componente <GifGrid /> correctamente ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: false
    });
    const wraper = shallow(<GifGrid category={category}></GifGrid>);
    expect(wraper).toMatchSnapshot();
  });

  test('debe mostar items cuando se cargan imagenes UseFechGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/imagen.png',
        title: 'un titulo'
      }
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wraper = shallow(<GifGrid category={category}></GifGrid>);
    //expect(wraper).toMatchSnapshot();
    expect(wraper.find('p').exists()).toBe(false);
    expect(wraper.find('GifGridItem').length).toBe(gifs.length);
  });
});
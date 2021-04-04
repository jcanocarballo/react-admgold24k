const { default: CouterApp } = require("../../CouterApp/CouterApp");
import {shallow} from 'enzyme'

describe('Prueba del componente CouterApp', () => {
  let wraper = shallow(<CouterApp></CouterApp>);
  beforeEach( () => {
    wraper = shallow(<CouterApp></CouterApp>);
  });

  test('debe mostrar <CounterApp /> correctamente ', () => {    
    expect(wraper).toMatchSnapshot();    
  });
  
  test('debe mostrar el valor por defecto de 100', () => {
    const wraper = shallow(
      <CouterApp value={100}></CouterApp>
    );

    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });

  test('debe incrementar con el boton add', () => {
    wraper.find('button').at(0).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });
  
  test('debe colocar el valor inicial con el boton reset', () => {
    const wraper = shallow(
      <CouterApp value={105}></CouterApp>
    );
    wraper.find('button').at(0).simulate('click');
    wraper.find('button').at(0).simulate('click');
    wraper.find('button').at(1).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('105');
  });

  test('debe decrementar con el boton remove', () => {    
    wraper.find('button').at(2).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('9');
  });
});
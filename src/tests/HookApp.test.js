import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas para el archivo HookApp.js', () => {
  test('Deberia mostrar el componente <HookApp /> correctamente', () => {    
    const wraper = shallow(<HookApp></HookApp>);
    expect(wraper).toMatchSnapshot();
  });
  
});
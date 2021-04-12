const { AddCategory } = require("../../components/addCategory");
import {shallow} from 'enzyme'

describe('Prueba de componente <AddCategory />', () => {
  const setCategories = jest.fn();

  let wraper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
  beforeEach( () => {
    jest.clearAllMocks();
    wraper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
  });

  test('debe mostrar el componente correctamente', () => {
    expect(wraper).toMatchSnapshot();  
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wraper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', {target: {
      value: value
    }});
  });

  test('NO debe de postear la información con submit', () => {
    wraper.find('form').simulate('submit', {preventDefault(){}});
    expect(setCategories).not.toHaveBeenCalled();
  });
  
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    // 1.- Simular el inputChange
    const value = 'Hola mundo';
    wraper.find('input').simulate('change', {target: {
      value: value
    }});
    // 2.- simular el submit
    wraper.find('form').simulate('submit', {preventDefault(){}});
    // 3.- setCategories se debe de haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4.- el valor del input debe de estar ''
    expect(wraper.find('input').prop('value')).toBe('');
  });
  
  
});
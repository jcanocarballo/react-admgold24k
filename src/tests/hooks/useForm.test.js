import { useForm } from '../../hooks/useForm';
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en el hook useForm', () => {
  const initialForm = {
    name: 'Julian',
    email: 'jcanocarballo@gmail.com'
  }
  test('debe retornar un formulario por defecto', async() => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  });

  test('debe de cambiar el valor de formulario', async() => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange] = result.current;
    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Rodrigo'
        }
      });
    });
    const [ values ] = result.current;
    expect(values).toEqual({...values, name: 'Rodrigo'});
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [ , handleInputChange, reset] = result.current;
    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Rodrigo'
        }
      });
      reset();
    });
    const [ values ] = result.current;
    expect(values).toEqual(initialForm);
  });
  
});
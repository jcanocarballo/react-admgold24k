import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en el hook useCounter', () => {
  test('debe retornar valores por defecto', async() => {
    const { result } = renderHook( () => useCounter() );
    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')    
  });
  
  test('debe tener el counter en 100', async() => {
    const { result } = renderHook( () => useCounter(100) ); 
    expect(result.current.counter).toBe(100)   
  });

  test('debe incrementar el counter en 1', async() => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;
    act( () => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101)   
  });

  test('debe de decrementar el counter en 1', async() => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;
    act( () => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99)  
  });

  test('debe tener el valor inicial el counter', async() => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement, reset } = result.current;
    act( () => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100)    
  });
});
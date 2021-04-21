import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
  
  test('Debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);    
  });
  
  test('Debe de agregar un TODO', () => {    
    const newTodo = {
      id: 3,
      desc: 'Nuevo todo',
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    }
    const state = todoReducer(demoTodos, action);
    expect(state.length).toEqual(3);    
    expect(state).toEqual([...demoTodos, newTodo]);    
  });
  test('Debe de eliminar un TODO', () => {        

    const action = {
      type: 'delete',
      payload: 2
    }
    const state = todoReducer(demoTodos, action);
    expect(state.length).toEqual(1);    
    expect(state).toEqual([demoTodos[0]])
    
  });

  test('Debe de hacer el TOGGLE del TODO', () => {        

    const action = {
      type: 'toggle',
      payload: 2
    }
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toEqual(true);   
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Prueba archivo <RealExampleRef />', () => {
  const wrapper = shallow( <RealExampleRef></RealExampleRef> );
  test('debe de mostrarse correctamente', () => { 
    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrarse <MultipleCustomHooks></MultipleCustomHooks>', () => { 
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
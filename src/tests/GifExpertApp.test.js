import React from 'react';
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en componente GifExpertApp', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifExpertApp></GifExpertApp>)
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
  
})
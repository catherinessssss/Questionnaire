import * as React from 'react';
import * as enzyme from 'enzyme';
import NavBar from '../NavBar';

it('renders the correct text with an exlicit title', () => {
    const navbar = enzyme.shallow(<NavBar name="Daniel" />);
    expect(navbar.find('.navbar').getElement().props.title).toEqual('Daniel');
});

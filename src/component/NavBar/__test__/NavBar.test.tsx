import * as React from 'react';
import * as enzyme from 'enzyme';
import NavBar from '../NavBar';

it('renders the correct text with an exlicit title', () => {
    const submitAnswer = () => {
        alert('submit answer');
    };

    const navbar = enzyme.shallow(<NavBar name="Daniel" showMenuIconButton={false} updateParentState={submitAnswer}/>);
    expect(navbar.find('.navbar').getElement().props.title).toEqual('Daniel');
});

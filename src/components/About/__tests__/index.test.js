//we need to import react to enable components
// so that they function properly when we test them.
import React from 'react';

//Render and cleanup are both functions, render will render 
//a component, cleanup protects what we are working with 
//by preventing data collisions and memory leaking
import { render, cleanup } from '@testing-library/react';

//This is getting the component that we are testing.
import About from '..';
import '@testing-library/jest-dom/extend-expect';

//This is making sure that after each test we dont
//have any leftover memory that could screw things up.
afterEach(cleanup);

describe('About component', () => {
    //renders About test
    // the it function is interchangeable with the 'test' function
    // we are testing the 'About' function that we imported from
    //index.js
    it('renders', () => {
        render(<About />);
    });
    it('matches snapshot DOM node structure', () => {
        // render About
    });
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();

})
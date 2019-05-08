import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Homepage from './Homepage';
import { MemoryRouter } from 'react-router-dom';
import AdminPage from './AdminPage';
import Register from './Register';
import LoginForm from './LoginForm';

//this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    
    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<MemoryRouter><Homepage events={[]} /></MemoryRouter>, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MemoryRouter><AdminPage/></MemoryRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MemoryRouter><Register /></MemoryRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MemoryRouter><LoginForm /></MemoryRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
});
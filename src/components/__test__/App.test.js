import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

it('Website renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

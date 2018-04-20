import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from 'src/components/App';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.querySelector('#root'));
});

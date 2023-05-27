import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../components/store';
import App from '../App';

describe('App', () => {
  it('Testing of App.js', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });
});

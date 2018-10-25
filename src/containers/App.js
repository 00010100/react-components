import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import store from 'store';

import TestComponent from 'components/TestComponent';

class App extends Component {
  render() {
    return (
      <Provider key={ module.hot ? Date.now() : store} store={store}>
        <TestComponent />
      </Provider>
    );
  }
}

export default hot(module)(App);

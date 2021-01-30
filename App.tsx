import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/reducks/store/store';
import Root from './src/Root';

export const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App;



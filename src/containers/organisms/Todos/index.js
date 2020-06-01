import React from 'react';
import { Provider } from '../../../lib/react-redux';
import configureStore from './configureStore';
import Todos from './Todos';

const store = configureStore();

/**
 * Separating the container and the presentational components is often a good idea, but you
 *  shouldn't take it as a dogma. Only do this when it truly reduces the complexity of your code base
 *
 *  In general, first trying to extract the presentational components. If there is too much
 * boilerplate passing the props through them, then you can create the containers around them that
 * load the data and specify the behavior.
 * */

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;

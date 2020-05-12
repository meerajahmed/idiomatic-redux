import createStore from '../../../lib/redux/createStore';
import reducers from './reducers';

const store = createStore(reducers);

export default store;

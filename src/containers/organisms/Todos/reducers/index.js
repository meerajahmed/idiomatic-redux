import combineReducers from '../../../../lib/redux/combineReducers';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/* const todoApp = (state = {}, action) => {
  // reducer composition
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}; */

export default combineReducers({
  todos,
  visibilityFilter,
});

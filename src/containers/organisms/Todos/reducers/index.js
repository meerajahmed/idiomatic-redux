import combineReducers from '../../../../lib/redux/combineReducers';
import todos, * as fromTodos from './todos';
/* import visibilityFilter from './visibilityFilter'; */

/* const todoApp = (state = {}, action) => {
  // reducer composition
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}; */

export default combineReducers({
  todos,
  /* visibilityFilter, */
});

/*
 * Encapsulate the knowledge about the state shape in the file that manage the state (state.todos),
 * so that the components don’t have to rely on it.
 * */
export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);

export const getIsFetching = (state, filter) => fromTodos.getIsFetching(state.todos, filter);

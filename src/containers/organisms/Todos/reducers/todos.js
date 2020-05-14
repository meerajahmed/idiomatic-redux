import todo from './todo';
import combineReducers from '../../../../lib/redux/combineReducers';

// this has two concerns how the array is updated and how an individual todo is updated.
// reducers can call other reducers to delegate the handling of some part of state they manage

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const getAllTodos = (state) => state.allIds.map((id) => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter((t) => t.completed);
    case 'active':
      return allTodos.filter((t) => !t.completed);
    default:
      return allTodos;
  }
};

export default combineReducers({
  byId,
  allIds,
});

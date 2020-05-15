import combineReducers from '../../../../lib/redux/combineReducers';

// this has two concerns how the array is updated and how an individual todo is updated.
// reducers can call other reducers to delegate the handling of some part of state they manage

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS': {
      const newState = { ...state };
      action.response.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  if (action.filter !== 'all') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  if (action.filter !== 'active') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  if (action.filter !== 'completed') {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map((todo) => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map((id) => state.byId[id]);
};

export default combineReducers({
  byId,
  idsByFilter,
});

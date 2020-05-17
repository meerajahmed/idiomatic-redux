import { combineReducers } from '../../../../lib/redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.response.map((todo) => todo.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'REQUEST_TODOS':
        return false;

      case 'RECEIVE_TODOS':
        return true;
      default:
        return state;
    }
  };

  combineReducers({
    ids,
    isFetching,
  });
};

export default createList;

/*
 * Selector that gets the IDs from the current state
 * */
export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

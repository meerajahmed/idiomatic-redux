const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS': {
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

export default byId;

/*
 * To encapsulate the knowledge about the state shape in this file, we export a new selector
 * that just gets the todo by its ID from the lookup table
 * */
export const getTodo = (state, id) => state[id];

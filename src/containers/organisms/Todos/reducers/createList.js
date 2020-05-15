const createList = (filter) => {
  return (state = [], action) => {
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
};

export default createList;

/*
 * Selector that gets the IDs from the current state
 * */
export const getIds = (state) => state;

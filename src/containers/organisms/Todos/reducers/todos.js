import todo from './todo';

const initialState = [];

const todos = (state = initialState, action) => {
  // this has two concerns how the array is updated and how an individual todo is updated.
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      // reducers can call other reducers to delegate the handling of some part of state they manage
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

export default todos;

let uid = 0;
const uniqueId = () => {
  uid += 1;
  return uid;
};

const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: uniqueId(),
  text,
});

const toggleTodos = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export { addTodos, toggleTodos, setVisibilityFilter };

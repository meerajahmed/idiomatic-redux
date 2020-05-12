const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getStore = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  // init store
  dispatch({});

  return {
    getStore,
    dispatch,
    subscribe,
  };
};

export default createStore;

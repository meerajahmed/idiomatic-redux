const loadState = () => {
  try {
    const serializedState = localStorage.getItem('redux-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('redux-state', serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export { loadState, saveState };

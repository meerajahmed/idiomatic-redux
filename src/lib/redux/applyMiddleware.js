const applyMiddleware = (store, middlewares) => {
  // slice -> clone
  middlewares
    .slice()
    .reverse()
    .forEach(() => {
      // eslint-disable-next-line no-param-reassign
      store.dispatch = middlewares(store)(store.dispatch);
    });
};

export default applyMiddleware;

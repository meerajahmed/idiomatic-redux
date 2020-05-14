const debounce = (func, wait) => {
  let timeout = null;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func();
    }, wait);
  };
};

export default debounce;

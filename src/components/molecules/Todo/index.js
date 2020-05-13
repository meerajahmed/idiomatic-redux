import React from 'react';

/*
 * Presentational component
 * It does not specify any behaviour but it knows how to render a Todo
 * */
const Todo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { completed, onClick, text } = props;
  return (
    <li>
      <button type="button" onClick={onClick}>
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {text}
        </span>
      </button>
    </li>
  );
};

export default Todo;

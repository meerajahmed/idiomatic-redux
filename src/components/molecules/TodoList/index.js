import React from 'react';
import Todo from '../Todo';

const TodoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => {
            onTodoClick(todo.id);
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;

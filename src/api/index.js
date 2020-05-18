import { v4 as uuid } from 'uuid';

const fakeDatabase = {
  todos: [
    {
      id: 'b8c0356b-2104-47bd-b0ff-7bf157e3277d',
      text: 'Hey',
      completed: false,
    },
    {
      id: '2d23ffe1-b8b8-4123-98b2-9147bf413891',
      text: 'hellooooo',
      completed: false,
    },
    {
      id: '6a0dbc92-0efc-49e1-ab37-9a6fc3fe3ce9',
      text: "let's go",
      completed: true,
    },
  ],
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// eslint-disable-next-line import/prefer-default-export
export const fetchTodos = (filter) =>
  delay(500).then(() => {
    /*
     * simulate API request failure
     * */
    if (Math.random() > 0.7) {
      throw new Error('API error');
    }

    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter((todo) => !todo.completed);
      case 'completed':
        return fakeDatabase.todos.filter((todo) => todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: uuid(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });

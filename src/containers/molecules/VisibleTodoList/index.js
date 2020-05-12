import React, { Component } from 'react';
import store from '../../organisms/Todos/store';
import TodoList from '../../../components/molecules/TodoList';
import getVisibleTodos from '../../organisms/Todos/selectors';

/**
 * All container components are similar. Their job is to connect a presentational component to the
 * Redux chore and specify the data and the behavior that it needs
 * */

class VisibleTodoList extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onTodoClick = (id) => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  };

  render() {
    const { todos, visibilityFilter } = store.getStore();
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return <TodoList todos={visibleTodos} onTodoClick={this.onTodoClick} />;
  }
}

export default VisibleTodoList;

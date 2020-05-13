import React, { Component } from 'react';
import TodoList from '../../../components/molecules/TodoList';
import getVisibleTodos from '../../organisms/Todos/selectors';
import { ReactReduxContext } from '../../../lib/react-redux/Context';

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
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onTodoClick = (id) => {
    const { store } = this.context;
    store.dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  };

  render() {
    const { store } = this.context;
    const { todos, visibilityFilter } = store.getState();
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return <TodoList todos={visibleTodos} onTodoClick={this.onTodoClick} />;
  }
}

VisibleTodoList.contextType = ReactReduxContext;

export default VisibleTodoList;

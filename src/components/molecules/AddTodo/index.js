import React, { Component, createRef } from 'react';
import store from '../../../containers/organisms/Todos/store';

/**
 * AddTodo cannot be classified as either a presentational component or as a container component because
 * it doesn't fit either category. The input and the button are the presentational part,
 * but dispatching an action onClick is the behavior which is usually specified by the container.
 *
 * However, in this case, we can keep them together because there isn't any state and the UI is very simple
 * */

let uid = 0;
const uniqueId = () => {
  uid += 1;
  return uid;
};

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.input = createRef();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = (text) => {
    store.dispatch({
      type: 'ADD_TODO',
      id: uniqueId(),
      text,
    });
  };

  render() {
    return (
      <>
        <input type="text" ref={this.input} />
        <button
          type="button"
          onClick={() => {
            this.onAddTodo(this.input.current.value);
            this.input.current.value = '';
          }}
        >
          Add Todo
        </button>
      </>
    );
  }
}

export default AddTodo;

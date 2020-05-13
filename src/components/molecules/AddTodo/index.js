import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import connect from '../../../lib/react-redux/connect';

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

/**
 * The connect code without any arguments is going to generate a container component that does not
 * subscribe to store. However, that will pass dispatch to the component that it wraps
 * */

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  onAddTodo = (text) => {
    const { dispatch } = this.props;
    dispatch({
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

AddTodo.defaultProps = {
  dispatch: () => {},
};

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(AddTodo);

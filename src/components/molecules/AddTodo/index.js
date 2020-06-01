import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import { addTodos } from '../../../containers/organisms/Todos/actions';
import connect from '../../../lib/react-redux/connect';

/**
 * AddTodo cannot be classified as either a presentational component or as a container component because
 * it doesn't fit either category. The input and the button are the presentational part,
 * but dispatching an action onClick is the behavior which is usually specified by the container.
 *
 * However, in this case, we can keep them together because there isn't any state and the UI is very simple
 * */

/**
 * The connect code without any arguments is going to generate a container component that does not
 * subscribe to store. However, that will pass dispatch to the component that it wraps
 * */

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.onAddTodo();
  };

  onAddTodo = () => {
    const { text = '' } = this.state;
    if (!text.trim()) {
      return;
    }
    const { dispatch } = this.props;
    dispatch(addTodos(text));
    this.setState(() => ({ text: '' }));
  };

  onInputChange = (event) => {
    const text = event.target.value;
    this.setState(() => ({ text }));
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit} autoComplete="off">
        <FormControl fullWidth>
          <InputLabel htmlFor="todos">Things to do...</InputLabel>
          <Input id="todos" name="todos" value={text} onChange={this.onInputChange} />
        </FormControl>
        <Box my={4} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="outlined" color="primary" onClick={this.onAddTodo}>
            Add todo
          </Button>
        </Box>
      </form>
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

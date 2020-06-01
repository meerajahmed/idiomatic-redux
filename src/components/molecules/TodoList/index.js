import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todos, onTodoClick } = props;
  return (
    <List dens="true">
      {/* eslint-disable-next-line react/prop-types */}
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;
        return (
          <ListItem key={todo.id} button onClick={() => onTodoClick(todo.id)}>
            <ListItemText id={labelId} primary={todo.text} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={() => onTodoClick(todo.id)}
                checked={todo.completed}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;

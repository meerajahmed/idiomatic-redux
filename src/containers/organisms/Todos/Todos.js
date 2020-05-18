import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AddTodo from '../../../components/molecules/AddTodo';
import VisibleTodoList from '../../molecules/VisibleTodoList';
import FooterLinks from '../../../components/molecules/FooterLinks';
import useStyles from './useStyles';

const Todos = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box my={8}>
        <Paper className={classes.paper}>
          <AddTodo />
          <VisibleTodoList />
          <FooterLinks />
        </Paper>
      </Box>
    </Container>
  );
};

export default Todos;

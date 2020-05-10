import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import uniqueId from 'lodash/uniqueId';
import { TASK_NOT_STARTED } from '../../atoms/Task';
import useStyles from './useStyles';

const Index = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const classes = useStyles();

  const handleTitleChange = (_title) => {
    setTitle(_title);
  };

  const handleDescriptionChange = (_description) => {
    setDescription(_description);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (title || description) {
      const task = {
        id: uniqueId('task_'),
        title,
        description,
        status: TASK_NOT_STARTED,
      };
      props.handleAddTask(task);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Grid container justify="center">
      <form noValidate autoComplete="off" onSubmit={handleAddTask}>
        <Card className={classes.card}>
          <CardContent>
            <Box my={4}>
              <TextField
                id="title"
                label="Title"
                fullWidth
                my={4}
                value={title}
                onChange={(event) => handleTitleChange(event.target.value)}
              />
            </Box>
            <Box my={4}>
              <TextField
                id="description"
                label="Description"
                fullWidth
                my={4}
                value={description}
                onChange={(event) => handleDescriptionChange(event.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button type="submit" color="primary">
              Save
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
};

Index.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default Index;

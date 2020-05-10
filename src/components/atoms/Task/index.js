import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export const TASK_NOT_STARTED = 'TASK.NOT_STARTED';
export const TASK_IN_PROGRESS = 'TASK.IN_PROGRESS';
export const TASK_COMPLETED = 'TASK.COMPLETED';

const Task = ({ handleStatusChange, task }) => (
  <Grid item xs={12} sm={4}>
    <Card>
      <CardContent>
        <Typography component="h5" variant="h5">
          {task.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardContent>
        <TextField
          id={task.id}
          select
          label="Task State"
          fullWidth
          value={task.status}
          onChange={(event) => handleStatusChange(task.id, event.target.value)}
        >
          <MenuItem key={1} value={TASK_NOT_STARTED}>
            Not Started
          </MenuItem>
          <MenuItem key={2} value={TASK_IN_PROGRESS}>
            In Progress
          </MenuItem>
          <MenuItem key={3} value={TASK_COMPLETED}>
            Completed
          </MenuItem>
        </TextField>
      </CardContent>
    </Card>
  </Grid>
);

Task.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  handleStatusChange: PropTypes.func.isRequired,
};

export default Task;

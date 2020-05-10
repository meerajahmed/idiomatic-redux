import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Task, { TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED } from '../../atoms/Task';

const selectTasks = (tasks, select = TASK_NOT_STARTED) => {
  return tasks.filter((task) => task.status === select);
};

const TaskList = ({ handleStatusChange, select, tasks }) => {
  const taskMap = selectTasks(tasks, select).map((task) => (
    <Task key={task.id} task={task} handleStatusChange={handleStatusChange} />
  ));

  return (
    <Box m={4}>
      {taskMap.length > 0 && (
        <Box mb={4}>
          <Typography component="h4" variant="h5" color="primary">
            {select === TASK_NOT_STARTED && <span>Not Started</span>}
            {select === TASK_IN_PROGRESS && <span>In Progress</span>}
            {select === TASK_COMPLETED && <span>Completed</span>}
          </Typography>
        </Box>
      )}
      <Grid container spacing={2}>
        {taskMap}
      </Grid>
    </Box>
  );
};

TaskList.defaultProps = {
  tasks: [],
  select: TASK_NOT_STARTED,
  handleStatusChange: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  select: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
  handleStatusChange: PropTypes.func,
};

export default TaskList;

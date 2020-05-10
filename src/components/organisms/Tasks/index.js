import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AddTask from '../../molecules/AddTask';
import TaskListView from '../../molecules/TaskListView';
import { TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED } from '../../atoms/Task';

const Tasks = ({ handleAddTask, handleStatusChange, tasks }) => (
  <Box my={4}>
    <AddTask handleAddTask={handleAddTask} />
    <TaskListView tasks={tasks} handleStatusChange={handleStatusChange} />
  </Box>
);

Tasks.defaultProps = {
  tasks: [],
  handleAddTask: () => {},
  handleStatusChange: () => {},
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  handleAddTask: PropTypes.func,
  handleStatusChange: PropTypes.func,
};

export default Tasks;

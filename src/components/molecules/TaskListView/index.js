import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TaskList from '../TaskList';
import { TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED } from '../../atoms/Task';

const TaskListView = ({ handleStatusChange, tasks }) => {
  return (
    <Box mt={5}>
      <TaskList tasks={tasks} select={TASK_NOT_STARTED} handleStatusChange={handleStatusChange} />
      <TaskList tasks={tasks} select={TASK_IN_PROGRESS} handleStatusChange={handleStatusChange} />
      <TaskList tasks={tasks} select={TASK_COMPLETED} handleStatusChange={handleStatusChange} />
    </Box>
  );
};

TaskListView.defaultProps = {
  tasks: [],
  handleStatusChange: () => {},
};

TaskListView.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf([TASK_NOT_STARTED, TASK_IN_PROGRESS, TASK_COMPLETED]),
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  handleStatusChange: PropTypes.func,
};

export default TaskListView;

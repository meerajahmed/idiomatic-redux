import { connect } from 'react-redux';

import { addTaskAsync, updateTaskStatus } from './actions';
import Tasks from '../../../components/organisms/Tasks';

const mapStateToProps = ({ tasks }) => ({ tasks });

const mapDispatchToProps = (dispatch) => ({
  handleAddTask: (task) => dispatch(addTaskAsync(task)),
  handleStatusChange: (id, status) => dispatch(updateTaskStatus(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

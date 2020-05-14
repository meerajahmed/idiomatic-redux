import FilterButton from '../../../components/atoms/FilterButton';
import { connect } from '../../../lib/react-redux';
import { setVisibilityFilter } from '../../organisms/Todos/actions';

/**
 * As a container component, the filter link doesn't have its own markup.
 * It delegates rendering to the FilterButton (Link) presentational component
 * */

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);

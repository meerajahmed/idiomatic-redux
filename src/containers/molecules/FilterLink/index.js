import FilterButton from '../../../components/atoms/FilterButton';
import { connect } from '../../../lib/react-redux';

/**
 * As a container component, the filter link doesn't have its own markup.
 * It delegates rendering to the FilterButton (Link) presentational component
 * */

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () =>
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);

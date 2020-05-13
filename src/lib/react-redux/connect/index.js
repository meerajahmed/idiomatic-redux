import React, { PureComponent } from 'react';
import { ReactReduxContext } from '../Context';

const connect = (mapStateToProps = () => ({}), mapDispatchToProps = () => ({})) => (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.unsubscribe = null;
    }

    componentDidMount() {
      const { store } = this.context;
      this.unsubscribe = store.subscribe(() => {
        this.forceUpdate();
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    getMappedProps = () => {
      const { store } = this.context;
      const state = store.getState();
      return {
        ...this.props,
        ...mapStateToProps(state, this.props),
        ...mapDispatchToProps(store.dispatch, this.props),
      };
    };

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Component {...this.getMappedProps()} />;
    }
  }
  Wrapper.contextType = ReactReduxContext;
  Wrapper.displayName = `connect(${Component.displayName || Component.name})`;
  return Wrapper;
};

export default connect;

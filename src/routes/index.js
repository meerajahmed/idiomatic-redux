import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const TaskPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Task'));
const TodoPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/Todo'));
const NotFoundPage = lazy(() => import(/* webpackPrefetch: true */ '../components/pages/NotFound'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path={process.env.ROUTE_TASK} component={TaskPage} />
      <Route exact path={`${process.env.ROUTE_TODO}:filter?`} component={TodoPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;

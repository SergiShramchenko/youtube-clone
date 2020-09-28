import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../pages/main';
import TrendsPage from '../pages/trends';
import SearchPage from '../pages/search';
import NotFoundPage from '../pages/404/404';

export default () => (
  <>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/trends' component={TrendsPage} />
      <Route path='/search_results' component={SearchPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

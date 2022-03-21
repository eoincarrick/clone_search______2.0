import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Result} from './index'

const Router = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/search' />
        </Route>
        <Route exact path={['/search', '/images', '/news', '/videos']}>
          <Result/>
        </Route>
      </Switch>
    </div>
  );
};

export default Router;

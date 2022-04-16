import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

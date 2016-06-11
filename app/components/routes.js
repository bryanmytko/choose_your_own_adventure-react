import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation, browserHistory } from 'react-router';

import adventures from './adventures';

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector("#main"));

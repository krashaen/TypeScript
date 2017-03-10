import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import "shared/styles/style.styl";
import { IndexPage } from "modules/IndexPage";
import { UsersPage } from "modules/UsersPage";


ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={IndexPage}/>
      <Route path="/users" component={UsersPage}/>
    </Router>
  ), 
  document.getElementById('root')
);
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { Module } from './shared/types/app';
import createRoutes from './routes';
import "shared/styles/style.styl";
import { IndexPage, UsersPage } from "modules";

const modules: Array<Module<any>> = [ new IndexPage(), new UsersPage() ];
const routes = createRoutes(modules);
const history = browserHistory;
const rootComponent = (
  <Router history={history} routes={routes} />
);

ReactDOM.render(rootComponent, document.getElementById('root')
);
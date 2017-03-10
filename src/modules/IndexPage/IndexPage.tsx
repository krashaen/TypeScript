import * as React from 'react';
import { Route } from 'react-router';
import Layout from './view';
import { Module } from 'shared/types/app';

class IndexPage extends Module<{}> {
  public getRoutes() {
    return <Route key="index" path="index" component={Layout} />;
  }
}

export default IndexPage;
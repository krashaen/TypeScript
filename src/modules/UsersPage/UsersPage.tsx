import * as React from 'react';
import { Route } from 'react-router';
import Layout from './view';
import { Module } from 'shared/types/app';

class UsersPage extends Module<{}> {
  public getRoutes() {
    return <Route key="users" path="users" component={Layout} />;
  }
}

export default UsersPage;
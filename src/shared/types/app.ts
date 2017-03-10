import { ReactElement } from 'react';
import { Route } from 'react-router';
import { Reducer } from 'redux';

abstract class Module<S> implements IModule<S> {
  protected onConnectRequestHandler?: (reducers: Array<any>) => void;

  public set onConnectRequest(handler: (reducers: Array<any>) => void) {
    this.onConnectRequestHandler = handler;
  };
}

interface IModule<S> {
  getRoutes?(): ReactElement<Route.RouteProps> | Array<ReactElement<Route.RouteProps>>;
}

export {
  Module,
  IModule,
};
